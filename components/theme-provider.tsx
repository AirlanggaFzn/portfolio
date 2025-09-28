'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"       // biasanya dipakai untuk class-based theming
      defaultTheme="system"   // theme default saat pertama load
    >
      {children}
    </NextThemesProvider>
  )
}
