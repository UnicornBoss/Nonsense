const ENDPOINT = process.env.FLOMO_ENDPOINT

export const createMemo = async (content) => {

  console.log("content:", content, ENDPOINT);

  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  })
}
