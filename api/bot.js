import { lyrics } from '../lyrics.js';
import { sendMessage } from '../utils/sendMessage.js';

export default async function handler(req, res) {
  const body = req.body;

  // Pastikan ini webhook dari Telegram
  if (body?.message?.text === '/musik') {
    for (const line of lyrics) {
      await sendMessage(line);
      await new Promise(r => setTimeout(r, 1000)); // delay 1 detik antar lirik
    }
  }

  res.status(200).send('OK');
}
