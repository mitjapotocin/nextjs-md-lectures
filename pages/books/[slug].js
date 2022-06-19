import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';
import Image from 'next/image';
import { isAllowedPaths, parseMd } from '../../utils/helpers';

export async function getStaticPaths() {
  const paths = fs.readdirSync('posts/books/')
    .filter((slug) => isAllowedPaths(slug))
    .map((slug) => ({ params: { slug } }));

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
      {/* <Link href={`/chapters/${slug}`}>
        <a> */}
          <h2 className='text-emerald-400'>
            Chapter {index + 1}: {frontmatter.title}
          </h2>
        {/* </a>
      </Link> */}

      <div dangerouslySetInnerHTML={{ __html: md({html: true}).render(content) }} />
  </div>
  );
}

export default function PostPage({ frontmatter, content, chapters }) {
  const aside = frontmatter.aside && [frontmatter.aside].flat(); 
  
  return (
    <div className='prose mx-auto book'>
      {frontmatter.coverImg && <div className="book-cover-img">
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
      <div className='flex-container'>
          <div  className='right-column'
              dangerouslySetInnerHTML={{
                  __html: md({ html: true }).render(parseMd(content)),
              }}
          />
      </div>

      {chapters.map(({ frontmatter, content, slug }, index) => (
        <div
          key={frontmatter.title}
          className='flex-container'>

          <div className='right-column'>

            <Chapter
                frontmatter={frontmatter}
                content={parseMd(content)}
                slug={slug}
                index={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
