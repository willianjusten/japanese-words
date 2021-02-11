import styled from 'styled-components'
import media from 'styled-media-query'

export const Block = styled.div``

export const Icon = styled.div`
  width: 4rem;
  cursor: pointer;
  color: white;
  text-align: center;
  margin: 3rem auto 5rem;
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }

  ${media.lessThan('medium')`
    margin: 1.5rem auto 2rem;
    width: 3rem;
  `}
`

export const Footer = styled.footer`
  font-size: 1.4rem;
  color: white;

  a,
  span {
    color: #f231a5;
  }
`
