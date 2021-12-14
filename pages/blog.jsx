import Head from 'next/head'
import { allBlogs } from '.contentlayer/data'
import BlogPost from '../components/BlogPost'
import Container from '../components/Container'

export default function Blog({ allBlogs }) {
  const metaTitle = '博客'
  const metaDesc =
    '写博客就是记录一些有用的废话'

  const sortedPostsData = allBlogs
    .sort((prevBlog, nextBlog) => {
      return new Date(nextBlog.updatedAt) - new Date(prevBlog.updatedAt)
    })
    .slice(0, 3)

  return (
    <>
      <Head>
        <title>{metaTitle} - Archy</title>
        <meta content={metaDesc} name="description" />
        <meta property="og:title" content={`${metaTitle} - Archy`} />
      </Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            {metaTitle}
          </h1>
          <p className="mb-12 text-gray-600 dark:text-gray-400">{metaDesc}</p>
          <div data-nosnippet className="flex flex-col">
            {sortedPostsData.map(blog => (
              <BlogPost key={blog.title} {...blog} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      allBlogs
    }
  }
}
