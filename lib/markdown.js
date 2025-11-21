import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getSortedPostsData(section) {
  // section: 'featured', 'projects', 'jobs'
  const sectionPath = path.join(contentDirectory, section);
  
  // Check if directory exists
  if (!fs.existsSync(sectionPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(sectionPath);
  const allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(sectionPath, fileName, 'index.md');
    
    // Some folders might not have index.md, check first
    if (!fs.existsSync(fullPath)) {
       // Try reading the file directly if it's not a folder
       if (fileName.endsWith('.md')) {
         const fileContents = fs.readFileSync(path.join(sectionPath, fileName), 'utf8');
         const id = fileName.replace(/\.md$/, '');
         const matterResult = matter(fileContents);
         return {
           id,
           ...matterResult.data,
           contentHtml: matterResult.content, // Raw content for now
         };
       }
       return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: fileName,
      ...matterResult.data,
      contentHtml: matterResult.content,
    };
  }).filter(Boolean);

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(section, id) {
  const fullPath = path.join(contentDirectory, section, id, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

