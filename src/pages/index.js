import Image from 'next/image'
import { Inter } from 'next/font/google'
import IndexPage from '@/components/pages/IndexPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <IndexPage />
}
