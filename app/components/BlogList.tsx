"use client"

import { useState } from "react"
import { Post } from '../utils/interface'
import PostComponent from "./PostComponent"

interface Props {
  posts: Post[]
}

const BlogList = ({ posts }: Props) => {

  const articlesShown = 5;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };

  return (
      <>
        {posts?.length > 0 && posts?.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, loadMore).map((post:any) => {       
          return (
            <PostComponent key={post?._id} post={post} />
          );
        })}

        <div className="flex flex-col items-center justify-center">
          {loadMore < posts?.length ? (
            <>            
            <button
              type="button"
              className="group relative overflow-hidden bg-white px-2 py-3 text-sm md:text-base rounded-lg"
              onClick={showMoreArticles}
            >
              <div className="absolute inset-0 w-3  bg-[#3B82F6]  transition-all duration-[350ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white ">
                Load More
              </span>
            </button>
            <div className="flex justify-center mt-5">
                Showing {loadMore} of {posts?.length} articles
            </div>
            </>
          ) : (
            <>            
            <button
              type="button"
              className="bg-[#483248] text-[#FFF] px-2 py-3 text-sm md:text-base rounded-lg opacity-50 cursor-not-allowed"
              onClick={showMoreArticles}
              disabled
            >
              All articles loaded
            </button>
            
            <div className="flex justify-center mt-5">
                Showing all articles
            </div>
            </>
          )}
        </div>
      </>
      
  )
}
export default BlogList;