import Image from 'next/image'
import * as S from './styles'

export type CardProps = {
  image: string
  hiragana: string
  kanji: string
  romanji: string
  meaning: string
}

const Card = ({ image, hiragana, romanji, meaning, kanji }: CardProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image src={`/img/${image}.png`} alt={meaning} width={300} height={300} />
    </S.ImageWrapper>

    <S.Block>
      <S.Japanese>{hiragana}</S.Japanese>
      <S.Meaning>[ {meaning} ]</S.Meaning>
      <S.Romanji>{romanji}</S.Romanji>
    </S.Block>
    <S.Block>
      <S.Japanese>{kanji}</S.Japanese>
    </S.Block>
  </S.Wrapper>
)

export default Card
