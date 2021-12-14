import { useEffect } from 'react';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewCounter({ slug }) {
  const { data, error } = useSWR(`/api/view/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
