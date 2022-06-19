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
    <div className='home'>
      <h1>Lecture notes</h1>

      {posts.map(({ slug, frontmatter }) => (
        <div className='book' key={slug}>
          <Link href={`/books/${slug}`}>
            <a className="p-4">
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.subTitle}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
