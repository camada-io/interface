/* eslint-disable @next/next/no-img-element */
"use client"

import "@/styles/globals.css"
import { Mulish } from "next/font/google"
import { Providers } from "./provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ConnectWalletModal } from "@/components/ConnectWallet"
import { usePathname } from "next/navigation"
import { checkIsPublicRoute } from "@/utils/appRoutes"
import { PrivateRoute } from "@/components/PrivateRoute"

const mulish = Mulish({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isPublicPage = checkIsPublicRoute(pathname)

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${mulish.className} m-0 p-0 h-screen`}>
        <Providers>
          <div className="flex min-h-screen bg-gray-700 flex-col bg-cover bg-repeat-x bg-[url('/images/background.svg')]">
            <Header />
            <main className="flex-grow mt-[105px]">
              {isPublicPage && children}
              {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
            </main>
            <Footer />
            <ConnectWalletModal />
          </div>
        </Providers>
      </body>
    </html>
  )
}
