import Head from 'next/head';
import Container from '../components/Container';
import EventCard from '../components/EventCard';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Events() {
  const { data, error } = useSWR('/api/events', fetcher);

  console.log(data, data?.length, error);

  const metaTitle = '人生大事件';
  const metaDesc = '以时间轴的形式记录人生大事件';

  return (
    <>
      <Head>
        <title>{metaTitle} - Archy</title>
        <meta content={metaDesc} name="description" />
        <meta property="og:title" content={`${metaTitle} - Jay`} />
      </Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          🚧 WIP: 施工中 🚧
        </div>
      </Container>
    </>
  );
}
