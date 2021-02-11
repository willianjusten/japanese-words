import { useState } from 'react'
import { RefreshOutline } from '@styled-icons/evaicons-outline/RefreshOutline'

import data from 'data/words'
import Card from 'components/Card'

import * as S from './styles'

type Word = {
  img: string
  mean: string
  jp: {
    wd: string
    kj: string
    rmj: string
  }
  category: string
}

const Main = () => {
  const randomWord = () => Math.floor(Math.random() * data.length)
  const [word, setWord] = useState<Word>(data[randomWord()])

  return (
    <>
      <S.Block>
        <Card
          image={word.img}
          hiragana={word.jp.wd}
          kanji={word.jp.kj}
          romanji={word.jp.rmj}
          meaning={word.mean}
        />

        <S.Icon>
          <RefreshOutline
            size={40}
            title="Get new word"
            onClick={() => setWord(data[randomWord()])}
          />
        </S.Icon>
      </S.Block>

      <S.Footer>
        Made with <a href="https://nextjs.org/">NextJS</a> and
        <span> 愛</span> by{' '}
        <a href="https://willianjusten.com.br">Willian Justen</a>
      </S.Footer>

      <S.Footer>
        Totally inspired by <a href="https://mainichi.me/">Mainich.me</a>
      </S.Footer>
    </>
  )
}

export default Main
