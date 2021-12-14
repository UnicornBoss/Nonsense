import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPost({ description, slug, title }) {
  const { data } = useSWR(`/api/view/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full transform transition-all hover:scale-[101%]">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  )
}
