import { Project, ProjectMatter } from '@/config/types';
import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

const BASE_PATH = '/src/projects';
const PROJECT_PATH = path.join(process.cwd(), BASE_PATH);

// 모든 MDX 파일 조회
export const getProjectPaths = (locale?: string) => {
  const filename = locale || '*';
  const projectPaths: string[] = sync(`${PROJECT_PATH}/**/${filename}.mdx`);
  return projectPaths;
};

// MDX detail
const parseProject = async (postPath: string, locale: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as ProjectMatter;
  const startMonthString = dayjs(grayMatter.startMonth).locale(locale).format('YYYY년 MM월 DD일');
  const endMonthString = dayjs(grayMatter.endMonth).locale(locale).format('YYYY년 MM월 DD일');
  const { url, slug } = parseProjectAbstract(postPath);
  return { ...grayMatter, content, startMonthString, endMonthString, url, slug, locale };
};

// project를 날짜 최신순으로 정렬
const sortProjectList = (projectList: Project[]) => {
  return projectList.sort((a, b) => (a.endMonth > b.endMonth ? -1 : 1));
};

// MDX의 개요 파싱
export const parseProjectAbstract = (postPath: string) => {
  const path = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [slug, locale] = path.split('/');

  const url = `/project/${slug}`;
  return { url, slug, locale };
};

// 모든 프로젝트 목록 조회. 이력서 하단에서 사용
export const getProjectList = async (locale: string): Promise<Project[]> => {
  const projectPaths = getProjectPaths(locale);
  const projectList = await Promise.all(
    projectPaths.map((postPath) => parseProject(postPath, locale))
  );
  return projectList;
};

export const getSortedProjectList = async (locale: string) => {
  const projectList = await getProjectList(locale);
  return sortProjectList(projectList);
};

// project 상세 페이지 내용 조회
export const getProjectDetail = async (slug: string, locale: string) => {
  const filePath = `${PROJECT_PATH}/${slug}/${locale}.mdx`;
  const detail = await parseProject(filePath, locale);
  return detail;
};
