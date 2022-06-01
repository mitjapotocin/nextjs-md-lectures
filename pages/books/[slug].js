import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts/books/');

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/books/${slug}/index.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  
  const chapters = (frontmatter.chapters || []).map(slug => {
    const fileName = fs.readFileSync(`posts/chapters/${slug}/index.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      frontmatter,
      content,
      slug
    }
  })
  
  return {
    props: {
      frontmatter,
      content,
      chapters
    },
  };
}

const Chapter = ({ frontmatter, content, slug, index }) => { 
  return (
    <div className='prose mx-auto mt-8'>
      <Link href={`/chapters/${slug}`}>
        <a>
          <h2 className='underline text-emerald-500'>
          🔗 Chapter {index + 1}: {frontmatter.title}
          </h2>
        </a>
      </Link>

      <div dangerouslySetInnerHTML={{ __html: md({html: true}).render(content) }} />
  </div>
  );
}

export default function PostPage({ frontmatter, content, chapters }) {
  return (
      <div className='prose mx-auto'>
          <h1>{frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: md({html: true}).render(content) }} />

          {chapters.map(({ frontmatter, content, slug }, index) => (
              <Chapter
                  key={frontmatter.title}
                  frontmatter={frontmatter}
                  content={content}
                  slug={slug}
                  index={index}
              />
          ))}
      </div>
  );
}
