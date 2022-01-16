import { createMemo } from "../../lib/flomo"

export default async function handler(req, res) {
  console.log(req.body, req.query)
  const response = await createMemo(req.body.content);

  return res.status(200).json(response);
}
