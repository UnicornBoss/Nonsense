import Image from 'next/image'
import dayjs from '../lib/day'
import Container from '../components/Container'
import ViewCounter from '../components/ViewCounter';


export default function BlogLayout({ blog, children }) {
  const formatDate = date => {
    return dayjs.utc(date).format('YYYY 年 MM 月 DD 日')
  }

  return (
    <Container>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
          {blog.title}
        </h1>
        <div data-nosnippet className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-2">
          <div className="flex items-center">
            <Image
              className="rounded-full"
              alt="Archy"
              height={24}
              width={24}
              src="/images/Memoji.png"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {formatDate(blog.updatedAt)}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {blog.readingTime.text}
            {` • `}
            <ViewCounter slug={blog.slug} />
          </p>
        </div>
        <div data-nosnippet className="w-full max-w-none mt-4 prose dark:prose-dark">
          {children}
        </div>
      </article>
    </Container>
  )
}
