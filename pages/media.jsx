import Head from 'next/head';
import Container from '../components/Container';

export default function Media() {
  return (
    <Container>
      <Head>
        <title>多媒体 - Archy</title>
        <meta content="多媒体" name="description" />
        <meta property="og:title" content="Media - Archy" />
      </Head>
      <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
          多媒体
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          本来想嵌入Notion的Database，奈何Notion现在不支持这个功能，后续再说吧，先用Airtable替代。
        </p>
        <h2 className="mb-4 font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white">
          书架
        </h2>
        <iframe
          className="airtable-embed w-full h-96 roun"
          height="533"
          width="100%"
          style={{
            background: 'transparent',
            border: '1px solid #ccc;',
            borderRadius: '0.5rem'
          }}
          src="https://airtable.com/embed/shrz6jkOKF8pN8iIz?viewControls=on"
        />
        <p className="mt-8 mb-8 text-gray-600 dark:text-gray-400">
          找到个库，之后找时间试一下：<a href='https://github.com/NotionX/react-notion-x' className='text-blue-500 underline'>https://github.com/NotionX/react-notion-x</a>
        </p>
      </div>
    </Container>
  );
}
