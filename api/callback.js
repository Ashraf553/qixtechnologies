export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { code, state, error } = req.query;

  // Handle errors from Google OAuth consent screen
  if (error) {
    console.error("Google OAuth error parameter:", error);
    return res.redirect(`/?auth_error=${encodeURIComponent(error)}`);
  }

  if (!code || !state) {
    return res.status(400).json({ error: 'Missing code or state parameters' });
  }

  // Parse cookies from request headers
  const cookieHeader = req.headers.cookie || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => c.trim().split('='))
  );
  
  const savedState = cookies['oauth_state'];

  // CSRF validation: verify that the returned state matches the saved state
  if (!savedState || savedState !== state) {
    return res.status(400).json({ error: 'CSRF token mismatch. Verification failed.' });
  }

  const clientId = process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID || '1097241285098-dummy.apps.googleusercontent.com';
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET || '';

  // Determine redirect URI dynamically
  const host = req.headers.host || 'localhost:5174';
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
  const redirectUri = `${protocol}://${host}/api/callback`;

  // Fallback: If client secret is not configured, simulate successful login but warn the developer
  if (!clientSecret || clientSecret === 'YOUR_GOOGLE_CLIENT_SECRET') {
    res.setHeader('Set-Cookie', 'oauth_state=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax');
    const demoRedirect = `/?social_auth=true` +
      `&provider=Google` +
      `&email=demo.developer@gmail.com` +
      `&name=Demo Google Developer` +
      `&avatar=` +
      `&warning=client_secret_missing`;
    res.writeHead(302, { Location: demoRedirect });
    res.end();
    return;
  }

  try {
    // 1. Exchange authorization code for access and ID tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      })
    });

    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      console.error("Token exchange failed:", errText);
      return res.redirect(`/?auth_error=${encodeURIComponent('Token exchange failed: ' + errText)}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Fetch user information using the access token
    const userinfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!userinfoResponse.ok) {
      const errText = await userinfoResponse.text();
      console.error("Userinfo request failed:", errText);
      return res.redirect(`/?auth_error=${encodeURIComponent('Userinfo request failed: ' + errText)}`);
    }

    const userInfo = await userinfoResponse.json();

    // 3. Clear oauth_state cookie
    res.setHeader('Set-Cookie', 'oauth_state=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax');

    // 4. Redirect to the frontend with the user profile information
    const redirectUrl = `/?social_auth=true` +
      `&provider=Google` +
      `&email=${encodeURIComponent(userInfo.email || '')}` +
      `&name=${encodeURIComponent(userInfo.name || userInfo.given_name || '')}` +
      `&avatar=${encodeURIComponent(userInfo.picture || '')}`;

    res.writeHead(302, { Location: redirectUrl });
    res.end();
  } catch (err) {
    console.error("OAuth Callback exception:", err);
    return res.redirect(`/?auth_error=${encodeURIComponent(err.message)}`);
  }
}
