import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Block = styled.div``

export const IconWrapper = styled.div`
  display: flex;
`

type IconAnimation = {
  animation: 'rotate' | 'pulse'
}

export const Icon = styled.div<IconAnimation>`
  ${({ animation }) => css`
    color: white;
    cursor: pointer;
    margin: 3rem auto;
    text-align: center;
    transition: transform 0.8s ease-in-out;
    width: 4rem;

    ${animation === 'rotate' &&
    css`
      &:hover {
        transform: rotate(360deg);
      }
    `}

    ${animation === 'pulse' &&
    css`
      &:hover {
        transform: scale(1.05);
      }
    `}

    ${media.lessThan('medium')`
      margin: 2rem auto 3rem;
      width: 3rem;
    `}
  `}
`

export const Footer = styled.footer`
  color: white;
  font-size: 1.4rem;

  a,
  span {
    color: #f231a5;
  }
`

export const Warning = styled(Footer)`
  margin: 1rem auto;
  text-align: center;

  ${media.lessThan('medium')`
    width: 85%;
  `}
`
