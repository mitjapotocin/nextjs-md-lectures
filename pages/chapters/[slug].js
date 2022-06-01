import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts/chapters/');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/chapters/${slug}/index.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  
  let subPages = [];
  
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
      <h1>{frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />

    </div>
  );
}
