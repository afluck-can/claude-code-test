export default async function handler(req, res) {
  const { chatInput, sessionId } = req.query;
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(500).json({ error: 'WEBHOOK_URL not configured' });
  }

  const params = new URLSearchParams({ chatInput, sessionId });
  const upstream = await fetch(`${webhookUrl}?${params}`);
  const data = await upstream.json();

  res.status(upstream.status).json(data);
}
