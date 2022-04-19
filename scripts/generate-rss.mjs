import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/data/allBlogs.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Archy Fan',
    site_url: 'https://nonsense.archy.club',
    feed_url: 'https://nonsense.archy.club/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://nonsense.archy.club/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
