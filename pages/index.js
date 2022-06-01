import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const folders = fs.readdirSync('posts/books');

  const posts = folders
    .filter(slug => !['.DS_Store', 'boilerplate.md'].includes(slug))
    .map((slug) => {
      const readFile = fs.readFileSync(`posts/books/${slug}/index.md`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
    }
  );

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl overflow-hidden flex flex-col'
        >
          <Link href={`/books/${slug}`}>
            <a className="p-4">
              <h1 className='text-xl bold'>{frontmatter.title}</h1>
              <p>{frontmatter.metaTitle}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
