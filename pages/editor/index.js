import md from 'markdown-it';
import fs from 'fs';
import matter from 'gray-matter';
import { useState } from 'react';
import { IoMdClipboard } from 'react-icons/io';
import { ImShrink2, ImEnlarge2 } from "react-icons/im";
import { parseMd } from '../../utils/helpers';

const relativePath = '/chapters';

export async function getStaticProps() {
  const fileName = fs.readFileSync(`public${relativePath}/boilerplate.md`, 'utf-8');
  const { content } = matter(fileName);
  
  return {
    props: {
      content
    },
  };
}

export default function PostPage({ content }) {
  const [value, setValue] = useState(parseMd(content, relativePath));
  const [small, setSmall] = useState(false);

  const copyToClipboard = () => { 
    navigator.clipboard.writeText(value);
  }


  return (
    <div className='prose mx-auto'>

      <div
        className={small ? 'small md-editor' : 'md-editor'}>

        <div className='toolbar'>
          <button
            className='icon-button'
            onClick={() => setSmall(!small)}>
            { small ? <ImEnlarge2 /> : <ImShrink2 /> }
          </button>

          <button
            className='icon-button'
            onClick={copyToClipboard}>
            <IoMdClipboard/>
          </button>
        </div>
      
        <textarea
          defaultValue={content}
          onChange={e => setValue(parseMd(e.target.value, relativePath))}
        />
      </div>
      <div className='flex-container'>
        <div className='right-column'>
          <div dangerouslySetInnerHTML={{ __html: md({ html: true }).render(value) }} />
        </div>
      </div>
    </div>
  );
}
