'use client'

import { useCallback, useContext } from "react";
import { useRouter } from "next/navigation";
import { OriginContext } from "@/app/components/OriginTracker";

export default function BackButton() {
  const router = useRouter();
  const isWithinPage = useContext(OriginContext);

  const onClick = useCallback(() => {
    if (isWithinPage) router.back();
    else router.replace('/');
  }, [isWithinPage, router]);

  return (
    <div className='flex justify-center mb-12' >
      <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:hover:transition ease-in-out duration-500' >Go Back</button>
    </div>
  )
}

