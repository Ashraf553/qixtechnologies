import { randomBytes } from 'crypto';

export default function handler(req, res) {
  // Allow only GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const clientId = process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID || '1097241285098-dummy.apps.googleusercontent.com';
  
  // Dynamically determine the redirect URI based on the host
  const host = req.headers.host || 'localhost:5174';
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
  const redirectUri = `${protocol}://${host}/api/callback`;

  // Generate a cryptographically secure random state to prevent CSRF
  const state = randomBytes(16).toString('hex');

  // Set the state in a cookie to verify it in the callback
  res.setHeader('Set-Cookie', `oauth_state=${state}; Path=/; HttpOnly; Max-Age=3600; SameSite=Lax`);

  // Google OAuth 2.0 Auth URL
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` + 
    `client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=openid%20email%20profile` +
    `&state=${encodeURIComponent(state)}` +
    `&prompt=select_account`;

  // Redirect the user to Google's OAuth consent screen
  res.writeHead(302, { Location: authUrl });
  res.end();
}
