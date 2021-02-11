import Main from 'components/Main'
import { NextSeo } from 'next-seo'
import GithubCorner from 'react-github-corner'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Japanese Words"
        description="Discover new japanese words each time you see the page."
        canonical="https://japanese-words.vercel.app"
        openGraph={{
          url: 'https://japanese-words.vercel.app',
          title: 'Japanese Words',
          description:
            'Discover new japanese words each time you see the page.',
          images: [
            {
              url: 'https://japanese-words.vercel.app/img/cover.png'
            }
          ],
          site_name: 'JapaneseWords'
        }}
        twitter={{
          handle: '@Willian_justen',
          site: '@Willian_justen',
          cardType: 'summary_large_image'
        }}
      />
      <GithubCorner
        href="https://github.com/willianjusten/japanese-words"
        octoColor="#06092b"
        bannerColor="#f231a5"
      />
      <Main />
    </>
  )
}
