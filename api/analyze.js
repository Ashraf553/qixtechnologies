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
You are the QIX Technologies AI Architect based in Tashkent, Uzbekistan.
Analyze the user's project request honestly and carefully:
- Project Name: "${projectName}"
- Engine/Platform: "${projectType}"
- Requirements Notes: "${projectNotes}"

Your task is to analyze these requirements and return a highly customized, honest JSON breakdown of tasks, cost estimates in Uzbek Sums (UZS), and timeline.

CRITICAL CONSTRAINTS:
1. The tasks MUST be directly tailored to the user's specific request. If they mention "самса", "доставка", "3D", "Telegram", the tasks must reflect exactly these things. Do NOT generate generic or identical tasks.
2. For each task, write a highly descriptive name in Russian that clearly explains WHAT is being implemented and WHY it is required for their specific request (e.g., "Разработка Telegram-бота для заказов самсы" or "Настройка 3D-анимации тандыра на главной").
3. Assess the complexity honestly. Simple requests should be cheaper; complex requests (e.g., integrations, animations, bots) should cost more, but the total price (sum of all tasks) MUST be strictly between 250,000 UZS and 3,000,000 UZS.
4. Return between 2 and 4 itemized tasks.
5. Task prices must be integers (do not use decimals).
6. Output ONLY valid JSON in this exact structure, with no markdown tags (like \`\`\`json) and no text outside:
{
  "tasks": [
    {"name": "Конкретная задача 1 (почему и для чего)", "price": 200000},
    {"name": "Конкретная задача 2 (почему и для чего)", "price": 450000}
  ],
  "totalPrice": 650000,
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
  let totalPrice = 150000; // Base platform fee (150k UZS)

  if (text.length < 5) {
    tasksList.push({ name: `Базовая настройка окружения (${engineType})`, price: 100000 });
    totalPrice += 100000;
  } else {
    if (text.includes('самса') || text.includes('доставка')) {
      tasksList.push({ name: "Разработка модуля заказов и логистики доставки", price: 800000 });
      totalPrice += 800000;
    }
    if (text.includes('bot') || text.includes('бот') || text.includes('telegram')) {
      tasksList.push({ name: "Создание Telegram-бота для мгновенных уведомлений", price: 650000 });
      totalPrice += 650000;
    }
    if (text.includes('design') || text.includes('ui') || text.includes('figma') || text.includes('дизайн')) {
      tasksList.push({ name: "Отрисовка UI/UX дизайна интерфейса в Figma", price: 450000 });
      totalPrice += 450000;
    }
    if (text.includes('database') || text.includes('бд') || text.includes('sql') || text.includes('база')) {
      tasksList.push({ name: "Проектирование реляционной базы данных под заказы", price: 500000 });
      totalPrice += 500000;
    }

    if (tasksList.length < 2) {
      tasksList.push({ name: "Разработка ядра API и логики приложения", price: 400000 });
      totalPrice += 400000;
    }
    tasksList.push({ name: "Деплоймент в облако и тестирование системы", price: 150000 });
    totalPrice += 150000;
  }

  return {
    tasks: tasksList,
    totalPrice,
    timeline: totalPrice > 1200000 ? "14 дней" : "7 дней"
  };
}
