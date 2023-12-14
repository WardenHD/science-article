import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import classes from './layout.module.css'
import { Help, HomeRounded } from '@mui/icons-material'
import Link from 'next/link'
import favicon from './favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Science Article',
  description: 'Website project for science article',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${classes.body} ${inter.className}`}>
        <nav>
          <Link href="/"><HomeRounded/></Link>
          <h1>Science Article</h1>
          <Link href="/info"><Help/></Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
