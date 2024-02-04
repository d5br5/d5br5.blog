import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = '/src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

interface PostMatter {
  title: string;
  date: Date;
  thumbnail: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  categoryPublicName: string;
  content: string;
  readingMinutes: number;
}

// 모든 MDX 파일 조회
const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return postPaths;
};

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

// MDX의 개요 파싱
// url, cg path, cg name, slug
const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [categoryPath, slug] = filePath.split('/');

  const url = `/blog/${categoryPath}/${slug}`;
  const categoryPublicName = getCategoryPublicName(categoryPath);

  return {
    url,
    categoryPath,
    categoryPublicName,
    slug,
  };
};

// MDX detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);

  return { ...grayMatter, content, readingMinutes };
};

// category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a: Post, b: Post) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });
};

// 모든 category, slug 조합 조회. 접근 가능한 디테일 페이지 목록
export const getPostParamList = () => {
  const postPaths: string[] = getPostPaths();
  const postParamList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({ category: item.categoryPath, slug: item.slug }));
  return postParamList;
};

// 모든 포스트 목록 조회. 블로그 메인 페이지에서 사용
export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths: string[] = getPostPaths(category);
  const postList = await Promise.all(postPaths.map((postPath) => parsePost(postPath)));
  return sortPostList(postList);
};

// category 목록 조회
export const getCategoryParamList = () => {
  const categoryList = getCategoryList();
  return categoryList.map((category) => ({ category }));
};

export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  const cgList = cgPaths.map((path) => path.split('/').slice(-1)?.[0]);
  return cgList;
};

// post 상세 페이지 내용 조회
export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/content.mdx`;
  const detail = await parsePost(filePath);
  return detail;
};
