export interface Post {
  find(arg0: (b: any) => boolean): import("@sanity/types").Image;
  sort(arg0: (a: any, b: any) => number): any;
  length: number;
  map(arg0: (post: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
  slice(arg0: number, loadMore: number): Post;
  title: string
  slug: { current: string };
  avatar: any;
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
  headings?: Array<HTMLHeadElement | string>;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount?: number
}
