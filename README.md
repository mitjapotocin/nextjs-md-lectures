# Documentation generator

Preview: https://nextjs-md-documentation.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content

Md Content is stored in the posts folder
Folder structure:

    .
    ├── books
        ├── book1
            ├── index.md
        ├── book2
            ├── index.md
    ├── chapters
        ├── chapter1
            ├── index.md
        ├── chapter2
            ├── index.md
        ├── chapter3
            ├── index.md

All images should fe stored in the /public folder

When defining a book you can include a list of chapters in the book's frontmatter. Chapter names must match folder names in the chapters folder.
```
---
title: 'Example book'
date: '2021-09-22'
chapters:
  - chapter1
  - chapter2
  - chapter3
---
```

