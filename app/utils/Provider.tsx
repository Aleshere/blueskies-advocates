"use client"

import React from "react";
// import { ThemeProvider } from "next-themes"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

interface Props {
    children: React.ReactNode;
}

// export const Provider = ({ children }: Props ) => {
//     return (
//       <ThemeProvider attribute="class">
//         {children}
//       </ThemeProvider>
//     );
// }

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}