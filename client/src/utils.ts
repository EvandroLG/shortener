export async function postData(url: string, data: { [key: string]: any }) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export function normalizeUrl(url: string) {
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
}
