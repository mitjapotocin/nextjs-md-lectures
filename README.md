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
aside:
  - These notes include orange workflows and visualizations we will construct during the course. 
  - These notes were written by Blaž Zupan with a huge help from the members of the Bioinformatics Lab in Ljubljana that develop and maintain orange. In part, we have reused lecture notes for Orange and orange workshops as designed by the same group.
chapters:
  - classification
  - regression
---
```
 
To create a new book or chapter run following command:

New book:
```
npm run new:book -- <book-name>
```

New new chapter:
```
npm run new:book -- <chapter-name>
```