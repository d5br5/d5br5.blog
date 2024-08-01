export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  readingMinutes: number;
  categoryPublicName: string;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}

export interface ProjectMatter {
  title: string;
  startMonth: Date;
  endMonth: Date;
  desc: string;
}

export interface Project extends ProjectMatter {
  // url: string;
  // slug: string;
  startMonthString: string;
  endMonthString: string;
  content: string;
}
