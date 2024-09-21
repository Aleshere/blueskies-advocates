import Header from "@/app/components/Header";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com"),
  title: {
    default: "BlueSkies Advocates",
    template: '%s | BlueSkies Advocates'
  },
  description: "Search for posts by tags on the blog. A large, free, database of aviation health impacts academic studies, noise, pollution, greenwashing, emissions, and much more.",
  openGraph: {
    title: "BlueSkies Blog Tags",
    description: "Search for posts by tags on the blog. A large, free, database of aviation health impacts academic studies, noise, pollution, greenwashing, emissions, and much more.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/tag",
    siteName: "BlueSkies Advocates",
    images: [
      {
        url: "https://www.weareblueskies.com/api/og?title=BLOG TAGS",
        alt: 'Preview image for BlueSkies Blog Tags',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: "BlueSkies Blog Tags",
    description: "Search for posts by tags on the blog. A large, free, database of aviation health impacts academic studies, noise, pollution, greenwashing, emissions, and much more.",
    creator: '@weAreBlueskies',
      images: [
      {
        url: "https://www.weareblueskies.com/api/og?title=BLOG TAGS",
        alt: 'Preview image for BlueSkies Blog Tags',
      },
    ],
  },
}

const page = async () => {
  const tags: Tag[] = await getAllTags();
  
  if (!tags) {
    notFound();
  }

  return (
    <div>
      <Header title="Tags" />
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;