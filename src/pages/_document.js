import FooterScript from '@/components/FooterScript'
import HeadLink from '@/components/HeadLink'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <HeadLink />
      <body>
        <Main />
        <NextScript />
        <FooterScript />
      </body>
    </Html>
  )
}
