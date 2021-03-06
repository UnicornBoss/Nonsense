import Link from 'next/link';
import NowPlaying from './NowPlaying';

const ExternalLink = ({ children, href }) => (
  <a
    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer
      data-nosnippet
      className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-8"
    >
      <hr className="w-full mb-8 border border-gray-200 dark:border-gray-800" />
      <NowPlaying />
      <div className="flex gap-6 w-full md:flex-row-reverse flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl pb-16">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
                概览
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
                博客
              </a>
            </Link>
            <Link href="/feed.xml">
              <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
                RSS
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/uses">
              <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
                物品清单
              </a>
            </Link>
            <Link href="/wallpapers">
              <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
                壁纸
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://github.com/UnicornBoss">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://gist.github.com/UnicornBoss">
              GitHub Gist
            </ExternalLink>
            <ExternalLink href="https://twitter.com/archyvan92">
              Twitter
            </ExternalLink>
            <ExternalLink href="https://www.polywork.com/archyfan">
              Polywork
            </ExternalLink>
            <ExternalLink href="https://rss3.bio/0x74310ed7CDbAFB156Dbdbe0324d26f963FDE5E03">
              RSS3
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
