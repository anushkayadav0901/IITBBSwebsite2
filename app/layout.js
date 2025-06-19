import { Inter } from 'next/font/google'
import './globals.css'
import LusionLoader from "@/components/Loaders/LusionLoader";
import RippleCursor from "@/components/Loaders/RippleCursor";


export const metadata = {
  title: 'IITHOSTEL',
  description: 'Made by Anushka',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-Aeonik'>
        <RippleCursor />
        <LusionLoader>{children}</LusionLoader>
      </body>
    </html>
  )
}
