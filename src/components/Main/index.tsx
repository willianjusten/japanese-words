import { useEffect, useState } from 'react'
import { RefreshOutline } from '@styled-icons/evaicons-outline/RefreshOutline'
import { VolumeUpOutline } from '@styled-icons/evaicons-outline/VolumeUpOutline'

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
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const voices = window.speechSynthesis?.getVoices()
    const jpVoice = voices?.find((voice) => /ja-JP/.test(voice.lang))

    setVoice(jpVoice || voices?.[0])
  }, [])

  const speak = (word: string) => {
    const patchedWord = word?.split('-').join('')
    const utterance = new SpeechSynthesisUtterance()

    utterance.text = patchedWord
    utterance.lang = 'ja-JP'
    utterance.voice = voice
    utterance.rate = 0.8

    window.speechSynthesis.speak(utterance)
  }

  return (
    <>
      <S.Block>
        <Card
          hiragana={word.jp.wd}
          image={word.img}
          kanji={word.jp.kj}
          meaning={word.mean}
          romanji={word.jp.rmj}
        />

        <S.IconWrapper>
          <S.Icon>
            <VolumeUpOutline
              onClick={() => speak(word.jp.rmj)}
              title="Hear the pronunciation"
            />
          </S.Icon>

          <S.Icon>
            <RefreshOutline
              onClick={() => setWord(data[randomWord()])}
              title="Get new word"
            />
          </S.Icon>
        </S.IconWrapper>
      </S.Block>

      <S.Warning>
        * This application uses the new Web Speech API, so it might not work
        correctly in some browsers/devices.
      </S.Warning>

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
