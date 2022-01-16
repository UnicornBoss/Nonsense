import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { allBlogs } from ".contentlayer/data";
import BlogPostCard from "../components/BlogPostCard";
import Container from "../components/Container";
import Subscribe from "../components/Subscribe";

const mostRecentPostsGradients = [
  "from-[lightpink] to-[lightsalmon]",
  "from-[lightgreen] to-[lightseagreen]",
  "from-[lightskyblue] to-[cornflowerblue]",
];

export async function getStaticProps() {
  const mostRecentPostsData = allBlogs
    .sort((prevBlog, nextBlog) => {
      return new Date(nextBlog.updatedAt) - new Date(prevBlog.updatedAt);
    })
    .slice(0, 3);

  return {
    props: {
      mostRecentPostsData,
    },
  };
}

export default function Home({ mostRecentPostsData }) {
  const router = useRouter();

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  return (
    <Container>
      <Head>
        <title>废话多说</title>
        <meta
          content="Archy, 独立开发者、远程工作者、Porsche 车迷、Linkin Park 歌迷。"
          name="description"
        />
        <meta
          property="og:title"
          content="Archy - A Blogger, A Coder, A Creator"
        />
      </Head>

      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 border-gray-700">
        <div className="flex flex-col-reverse sm:flex-row items-start w-full justify-between">
          <div className="flex flex-col sm:pr-8">
            <h1 className="mb-1 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
              Archy
            </h1>
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              技术经理, 当前在 <a className="font-bold text-teal-400" href="https://devhub.co">DevHub</a>{" "}
              任职.
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              独立开发者, 远程工作者
            </p>
          </div>
          <div className="flex-none w-80px sm:w-122px relative mb-8 sm:mb-0 select-none">
            <animated.div
              {...bind()}
              style={{
                x,
                y,
                position: "relative",
                touchAction: "none",
                zIndex: "99",
              }}
            >
              <Image
                className="rounded-full avatar-img"
                alt="I'm Archy"
                height={122}
                width={122}
                src="/images/Memoji.png"
                onDoubleClick={() => {
                  router.push("/flomo");
                }}
              />
            </animated.div>
          </div>
        </div>
        <h3 className="mb-6 text-2xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
          最近发布
        </h3>
        <div className="flex gap-6 flex-col md:flex-row w-full">
          {mostRecentPostsData.map(({ slug, title, updatedAt }, idx) => (
            <BlogPostCard
              key={slug}
              title={title}
              slug={slug}
              updatedAt={updatedAt}
              gradient={mostRecentPostsGradients[idx]}
            />
          ))}
        </div>
        <Link href="/blog">
          <a className="flex items-center h-6 mt-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
            查看所有
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <Subscribe />
      </div>
    </Container>
  );
}
