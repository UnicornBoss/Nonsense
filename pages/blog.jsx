import Head from 'next/head';
import { allBlogs } from '.contentlayer/data';
import BlogPost from '../components/BlogPost';
import Container from '../components/Container';
import { useState } from 'react';
import { pick } from '../lib/utils';

export default function Blog({ posts }) {
  const metaTitle = '博客';
  const metaDesc = '写博客就是记录一些有用的废话';
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = posts
    .sort((prevBlog, nextBlog) => {
      return new Date(nextBlog.updatedAt) - new Date(prevBlog.updatedAt);
    })
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Head>
        <title>{metaTitle} - Archy</title>
        <meta content={metaDesc} name="description" />
        <meta property="og:title" content={`${metaTitle} - Archy`} />
      </Head>
      <Container
        title="Blog – Lee Robinson"
        description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            博客
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {`自2021年起，我开始在网上写作，主要是关于个人生活和程序开发。
            总的来说，我已经在我的博客上写了${posts.length}篇文章。
            使用下面的搜索，按标题进行筛选。`}
          </p>
          <div className="relative w-full mb-4">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="搜索文章"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* {!searchValue && (
            <>
              <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
                Most Popular
              </h3>
              <BlogPost
                title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
                slug="style-guides-component-libraries-design-systems"
              />
              <BlogPost
                title="How Stripe Designs Beautiful Websites"
                summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
                slug="how-stripe-designs-beautiful-websites"
              />
              <BlogPost
                title="Creating a Monorepo with Lerna & Yarn Workspaces"
                summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
                slug="monorepo-lerna-yarn-workspaces"
              />
            </>
          )} */}
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            所有文章
          </h3>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              没有找到文章.
            </p>
          )}
          {filteredBlogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </Container>
    </>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'description', 'updatedAt'])
  );

  return { props: { posts } };
}
