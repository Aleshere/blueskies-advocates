"use client";

import { useState, createContext, useRef, useEffect } from "react";
import { usePathname } from 'next/navigation';


export const OriginContext = createContext<boolean>(false);

export default function OriginTracker({ children }: React.PropsWithChildren) {
  const [isWithinPage, setIsWithinPage] = useState(false);
  const isInitialLoadRef = useRef(true);

  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }

    setIsWithinPage(true);
    return () => setIsWithinPage(false);
  }, [usePathname]);

  return (
    <OriginContext.Provider value={isWithinPage}>
      {children}
    </OriginContext.Provider>
  );
}