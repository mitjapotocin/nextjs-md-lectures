import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { isAllowedPaths, parseMd } from '../../utils/helpers';
import { useState } from 'react';

export async function getStaticPaths() {
  const paths = fs.readdirSync('posts/chapters/')
    .filter(slug => isAllowedPaths(slug))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/chapters/${slug}/index.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <div className='flex-container'>
      <div  className='right-column'>
      
          <h1>{frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: md({ html: true }).render(parseMd(content)) }} />

      </div>
      </div>
    </div>
  );
}
