import { Locale, Project, ProjectMatter } from '@/config/types';
import { format } from 'date-fns';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

const BASE_PATH = '/src/projects';
const CAREER_PATH = `${BASE_PATH}/career`;
const SECTION_PATH = `${BASE_PATH}/section`;

const PROJECT_SECTION_PATH = path.join(process.cwd(), SECTION_PATH);
const monthFormat = {
  en: 'MMMM, yyyy',
  ko: 'yyyy년 M월',
};

// 모든 MDX 파일 조회
const getProjectSectionPaths = (locale?: string) => {
  const filename = locale || '*';
  const projectPaths: string[] = sync(`${PROJECT_SECTION_PATH}/**/${filename}.mdx`);
  return projectPaths;
};

export const getCareerProject = async (slug: string, locale: Locale) => {
  const postPath = path.join(process.cwd(), CAREER_PATH, `${slug}/${locale}.mdx`);
  return await parseProject(postPath, locale);
};

// MDX detail
const parseProject = async (postPath: string, locale: Locale) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as ProjectMatter;
  const startMonthString = format(grayMatter.startMonth, monthFormat[locale]);
  const endMonthString = format(grayMatter.endMonth, monthFormat[locale]);
  const slug = getProjectSlug(postPath);

  return { ...grayMatter, content, startMonthString, endMonthString, slug };
};

// project를 날짜 최신순으로 정렬
const sortProjectList = (projectList: Project[]) => {
  return projectList.sort((a, b) => (a.endMonth > b.endMonth ? -1 : 1));
};

// MDX의 개요 파싱
const getProjectSlug = (postPath: string) => {
  const path = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [, slug] = path.split('/');
  return slug;
};

// 모든 프로젝트 목록 조회. 이력서 하단에서 사용
const getProjectList = async (locale: Locale): Promise<Project[]> => {
  const projectPaths = getProjectSectionPaths(locale);
  const projectList = await Promise.all(
    projectPaths.map((postPath) => parseProject(postPath, locale))
  );
  return projectList;
};

export const getSortedProjectList = async (locale: Locale) => {
  const projectList = await getProjectList(locale);
  return sortProjectList(projectList);
};
