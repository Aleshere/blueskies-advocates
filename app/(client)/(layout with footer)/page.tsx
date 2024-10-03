import { client } from '@/sanity/lib/client';
import Header from '../../components/Header';
import { Post } from '../../utils/interface';
import BlogList from '../../components/BlogList';
import { ScrollToTop } from '../../utils/ScrollToTop';
import { Metadata } from 'next';

async function getPosts() {
  const query = `
*[_type == "post"] {
  title,
  slug,
  avatar,
  publishedAt,
  excerpt,
  _id,
  tags[]-> {
    _id,
    slug,
    name
  }
}
`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 80;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com'),
  title: {
    default: 'BlueSkies Advocates',
    template: '%s | BlueSkies Advocates',
  },
  description: 'People before planes. Aviation growth, pollution and noise impact communities around the world. We share information and resources to help citizens impacted by those issues.',
  openGraph: {
    title: 'Homepage',
    description: 'People before planes. Aviation growth, pollution and noise impact communities around the world. We share information and resources to help citizens impacted by those issues.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Homepage',
    description: 'People before planes. Aviation growth, pollution and noise impact communities around the world. We share information and resources to help citizens impacted by those issues.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Homepage',
      },
    ],
  },
};

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <Header title="Articles" />
      <ScrollToTop />
      <BlogList posts={posts} />
    </>
  );
}
