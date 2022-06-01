import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';
import Image from 'next/image';

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
  const aside = frontmatter.aside && [frontmatter.aside].flat(); 
  
  return (
    <div className='prose mx-auto'>
      {frontmatter.coverImg && <div style={{
        width: '30%',
        marginLeft: 'auto',
        borderRadius: '8px',
        padding: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }}>
        <Image
          width={650}
          height={650}
          layout={'responsive'}
          alt={frontmatter.coverImg}
          src={`/${frontmatter.coverImg}`}
        />
      </div>}
      
      <h1 className='max-w-sm mb-0 text-emerald-500 font-medium'>
          {frontmatter.title}
      </h1>
      <p className='text-red-600 text-xl mt-0 font-medium'>
          {frontmatter.subTitle}
      </p>
      <div className='flex'>
          {aside && (
              <aside className='mr-8 self-end'>
                  {frontmatter.aside.map((c, index) => (
                      <p className='font-semibold' key={index}>{c}</p>
                  ))}
              </aside>
          )}
          <div
              dangerouslySetInnerHTML={{
                  __html: md({ html: true }).render(content),
              }}
          />
      </div>

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
