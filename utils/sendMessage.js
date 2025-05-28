import fetch from 'node-fetch';

const BOT_TOKEN = '7917706055:AAFtNr5593oDUEA6v72iNObn6k7wLmfCxwk';
const CHAT_ID = '7341190291';

export async function sendMessage(text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    }),
  });
}
