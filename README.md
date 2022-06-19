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
title: 'Single-Cell Gene Expression Analysis'
subTitle: 'Working notes for the course on Functional Genomics and Proteomics, University of Ljubljana'
coverImg: 'images/books/sc-gene-expression/orange.png'
date: 'May 2022'
chapters:
  - classification
  - regression
---
```

***I recommend using the script for creating new books/chapters it will create folders and an boilerplate index.md file***
To create a new book or chapter run following command:

New book:
```
npm run new:book -- <book-name-use-dash-case>
```

New new chapter:
```
npm run new:chapter -- <chapter-use-dash-case>
```

### Chapters formatting and images
See /posts/chapters/boilerplate.md for documentation and examples.

You can try the md editor to see results in real time.
`https://nextjs-md-documentation.vercel.app/editor`
or
`<localhost>/editor`