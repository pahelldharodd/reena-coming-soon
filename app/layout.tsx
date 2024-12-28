import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-cormorant' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' })

export const metadata: Metadata = {
  title: 'Rina Dharod - Coming Soon',
  description: 'Rina Dharod Fashion Label - Our new collection is coming soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="" type="" />
      </head>
      <body className={`${cormorant.variable} ${lato.variable} font-sans bg-[#F8F4E3]`}>
        {children}
      </body>
    </html>
  )
}