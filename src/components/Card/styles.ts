import styled from 'styled-components'
import media from 'styled-media-query'

export const Block = styled.div`
  border-top: 1px solid;
  padding: 1rem 0 1.5rem;
`

export const Wrapper = styled.main`
  width: 35rem;
  background: #f231a5;
  color: white;
  padding: 5rem 2rem;
  margin: 0 2rem;
  border-radius: 0.6rem;

  ${media.lessThan('medium')`
    width: 30rem;
    padding: 1rem 1.5rem;
    margin: 3rem 1rem;
  `}
`

export const ImageWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;

  ${media.lessThan('medium')`
    margin-bottom: 2rem;
    max-width: 20rem;
  `}

  img {
    filter: contrast(0) brightness(2);
  }
`

export const Japanese = styled.h1`
  display: inline;
  font-size: 3rem;
  font-weight: 400;
`

export const Meaning = styled.span`
  font-size: 1.5rem;
`

export const Romanji = styled.p`
  font-size: 2rem;
`
