'use client'
import { connectionConfig } from '@/connection'
import { ThemeProvider } from 'next-themes'
import { WagmiConfig } from 'wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <WagmiConfig config={connectionConfig}>{children}</WagmiConfig>
    </ThemeProvider>
  )
}
