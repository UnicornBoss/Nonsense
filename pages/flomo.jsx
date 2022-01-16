import { useState, useEffect } from 'react';
import Head from 'next/head';
import Container from '../components/Container';
import dynamic from 'next/dynamic';

const ReactCodeInput = dynamic(import('react-code-input'));
const AuthKey = process.env.FLOMO_AUTH_KEY

export default function Flomo({ authKey }) {
  const [content, setContent] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [isFlomoAuth, setIsFlomoAuth] = useState(true);

  async function submitMemo(event) {
    event.preventDefault();
    const result = await fetch('/api/flomo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
    if (result.status == 200) {
      setContent('');
    }
  }

  useEffect(() => {
    setIsFlomoAuth(window.sessionStorage.getItem('flomoAuth'));
  }, [])

  function codeChange(code) {
    console.log(authKey)
    if (code.length == 4 && code == authKey) {
      window.sessionStorage.setItem('flomoAuth', true);
      setIsFlomoAuth(true)
    }
    else if (code.length == 4 && code != AuthKey) {
      setIsCodeValid(false)
    }
  }

  return (
    <>
      <Head></Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <div className={'w-full ' + (isFlomoAuth ? '' : 'blur-sm')}>
            <form onSubmit={submitMemo}>
              <label className="text-xl font-bold block text-gray-700 dark:text-gray-400 mb-4">MEMO:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-44 p-4 bg-gray-200 dark:bg-gray-800 mb-4"
                disabled={!isFlomoAuth}
              />
              <button type="submit" className="bg-emerald-500 text-white font-bold px-4 py-2 rounded-lg" disabled={!isFlomoAuth}>Submit</button>
            </form>
          </div>
          {!isFlomoAuth && (<div className="flex items-center justify-center w-full">
            <ReactCodeInput type="password" isValid={isCodeValid} onChange={codeChange}/>
          </div>)}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const authKey = process.env.FLOMO_AUTH_KEY
  return {
    props: { authKey }
  }
}
