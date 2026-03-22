import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsDirectory = path.join(process.cwd(), 'content/news');

export function getNewsList(lang: string) {
  const langDir = path.join(newsDirectory, lang);
  if (!fs.existsSync(langDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(langDir);
  const allNews = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(langDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as { title: string; date: string; description: string; image: string }),
      };
    });
  return allNews.sort((a, b) => {
    if (a.date < b.date) return 1;
    return -1;
  });
}

export function getNewsBySlug(lang: string, slug: string) {
  const fullPath = path.join(newsDirectory, lang, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    frontmatter: matterResult.data as { title: string; date: string; description: string; image?: string },
    content: matterResult.content,
  };
}