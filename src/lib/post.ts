import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

const BASE_PATH = '/src/posts';

const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

interface PostMatter {
  title: string;
  date: Date;
  tags: string[];
}

interface Category {
  public: string;
  dir_path: string;
}

export interface Post extends PostMatter {
  url: string;
  category: Category;
  mdx: MDXRemoteSerializeResult;
}

// mdx 파일을 파싱합니다.
const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;

  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [dir_path, slug] = filePath.split('/');

  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
    },
  });

  const url = `blog/${dir_path}/${slug}`;

  const publicCategory = dir_path
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

  const category: Category = {
    public: publicCategory,
    dir_path,
  };

  return {
    ...grayMatter,
    url,
    category,
    mdx,
  };
};

// 타겟 폴더에 있는 모든 mdx 파일을 탐색하여 가져옵니다.
export const getPostList = async (): Promise<Post[]> => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  console.log(postPaths);
  const result = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );

  // 가져온 mdx파일들을 front matter의 date를 기준으로 내림차순 정렬합니다.
  return result.sort((a: Post, b: Post) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });
};
