import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Image from 'next/image';
import { ImShrink2, ImEnlarge2 } from "react-icons/im";
import Link from 'next/link';
import { useState } from 'react';
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

const getTitleId = (title, index = '') => {
  return index + '-' + title.replace(/\s/g, '-').toLowerCase();
}

const Chapter = ({ frontmatter, content, index }) => { 
  return (
    <div className='prose mx-auto mt-8 chapter'>
      <h2
        className='chapter-title'
        id={getTitleId(frontmatter.title, index + 1)}>
          Chapter {index + 1}: {frontmatter.title}
      </h2>
    <div dangerouslySetInnerHTML={{ __html: md({html: true}).render(content) }} />
  </div>
  );
}

const ContentIndex = ({ chapters }) => {
  const [small, setSmall] = useState(false);

  return (
    <div className={small ? 'small content-index' : 'content-index'}>
      <div className='toolbar'>
          <button
            className='icon-button'
            onClick={() => setSmall(!small)}>
            { small ? <ImEnlarge2 /> : <ImShrink2 /> }
          </button>
        </div>
      
      <h2>
        Contents
      </h2>

      <ul>
      {chapters.map(({frontmatter}, index) => (
        <li key={index}>
          <Link href={'#' + getTitleId(frontmatter.title, index + 1)}>
            <a>Chapter {index + 1}: {frontmatter.title}</a>
          </Link>
        </li>
      ))}
      </ul>
        
    </div>
  )
}

export default function PostPage({ frontmatter, content, chapters }) {
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
      
      <h1 className='max-w-sm mb-0 font-medium'>
          {frontmatter.title}
      </h1>
      <p className='subtitle'>
          {frontmatter.subTitle}
      </p>
      <div className='flex-container'>
          <div  className='right-column'
              dangerouslySetInnerHTML={{
                  __html: md({ html: true }).render(parseMd(content)),
              }}
          />
      </div>

      <ContentIndex chapters={ chapters } />

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
