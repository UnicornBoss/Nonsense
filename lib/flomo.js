const ENDPOINT = process.env.FLOMO_ENDPOINT

export const createMemo = async (content) => {

  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      content: content
    }
  })
}
