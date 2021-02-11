import styled from 'styled-components'

export const Block = styled.div`
  border-top: 1px solid;
  padding: 1rem 0 1.5rem;
`

export const Wrapper = styled.main`
  max-width: 40rem;
  background: #f231a5;
  color: white;
  padding: 5rem 2rem;
  margin: 0 2rem;
  border-radius: 0.6rem;
`

export const ImageWrapper = styled.div`
  margin-bottom: 4rem;

  img {
    filter: contrast(0) brightness(2);
  }
`

export const Japanese = styled.h1`
  display: inline;
  font-size: 3rem;
`

export const Meaning = styled.span`
  font-size: 1.5rem;
`

export const Romanji = styled.p`
  font-size: 2rem;
`
