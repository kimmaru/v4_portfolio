import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Kim SungJoo | AI Engineer',
  description: 'Kim SungJoo is an AI Engineer specializing in Computer Vision and Machine Learning.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="bg-navy text-slate antialiased leading-relaxed">
        {children}
      </body>
    </html>
  )
}

