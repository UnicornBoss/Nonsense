import { useState } from 'react';
import Head from 'next/head';
import Container from '../components/Container';

export default function Flomo() {
  const [content, setContent] = useState('');

  async function submitMemo(event) {
    event.preventDefault();
    const result = await fetch('/api/flomo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    })
    console.log(result)
  }

  return (
    <>
      <Head></Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <form onSubmit={submitMemo}>
            <label>Memo:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Container>
    </>
  );
}
