export default async function handler(req, res) {
  // CORS configuration for Vercel Serverless Functions
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { projectName, projectType, projectNotes } = req.body;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Graceful fallback to static estimation if API Key is not set up
    return res.status(200).json(getFallbackEstimate(projectNotes, projectType));
  }

  try {
    const systemPrompt = `
You are the QIX Technologies AI Architect.
Analyze the user's project request:
- Project Name: "${projectName}"
- Engine/Platform: "${projectType}"
- Requirements Notes: "${projectNotes}"

Your task is to analyze these requirements and return a JSON breakdown of tasks, cost estimates, and timeline.

CRITICAL CONSTRAINTS:
1. The total price (sum of all tasks) MUST be strictly between $20 and $250. Do not exceed $250.
2. Return between 2 and 4 itemized tasks.
3. The first task must always be a base platform setup fee (e.g. $10 to $20).
4. Task prices must be integers (do not use decimals).
5. Output ONLY valid JSON in this exact structure, with no markdown tags (like \`\`\`json) and no text outside:
{
  "tasks": [
    {"name": "Base Platform Setup & Core Logic", "price": 15},
    {"name": "Database Integration & Schema Design", "price": 45},
    {"name": "Deployment pipeline setup", "price": 10}
  ],
  "totalPrice": 70,
  "timeline": "7 Days"
}
`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      return res.status(200).json(getFallbackEstimate(projectNotes, projectType));
    }

    const data = await response.json();
    let textResult = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    // Cleanup markdown if present
    textResult = textResult.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const parsed = JSON.parse(textResult);
    return res.status(200).json(parsed);
  } catch (error) {
    console.error("AI Analysis backend error:", error);
    return res.status(200).json(getFallbackEstimate(projectNotes, projectType));
  }
}

function getFallbackEstimate(notesText, engineType) {
  const text = (notesText || '').trim().toLowerCase();
  const tasksList = [];
  let totalPrice = 12; // Base platform fee

  if (text.length < 5) {
    tasksList.push({ name: `Basic Sandbox Allocation (${engineType})`, price: 8 });
    totalPrice += 8;
  } else {
    if (text.includes('design') || text.includes('ui') || text.includes('ux') || text.includes('figma') || text.includes('interface')) {
      tasksList.push({ name: "Figma UI/UX Design & Prototyping", price: 35 });
      totalPrice += 35;
    }
    if (text.includes('database') || text.includes('db') || text.includes('sql') || text.includes('mongo') || text.includes('data') || text.includes('backend')) {
      tasksList.push({ name: "High-Performance Database Node Setup", price: 45 });
      totalPrice += 45;
    }
    if (text.includes('mobile') || text.includes('app') || text.includes('ios') || text.includes('android') || text.includes('phone')) {
      tasksList.push({ name: "Mobile Frame Native Deployment", price: 70 });
      totalPrice += 70;
    }
    if (text.includes('secure') || text.includes('security') || text.includes('auth') || text.includes('crypto') || text.includes('login')) {
      tasksList.push({ name: "Cryptographic Authorization Gateway", price: 50 });
      totalPrice += 50;
    }

    if (tasksList.length < 2) {
      tasksList.push({ name: "Core API Routing & Endpoint Infrastructure", price: 30 });
      totalPrice += 30;
    }
    tasksList.push({ name: `Edge CD Pipeline (${engineType})`, price: 8 });
    totalPrice += 8;
  }

  return {
    tasks: tasksList,
    totalPrice,
    timeline: totalPrice > 120 ? "14 Days" : "7 Days"
  };
}
