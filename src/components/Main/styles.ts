import styled from 'styled-components'

export const Block = styled.div``

export const Icon = styled.div`
  cursor: pointer;
  color: white;
  text-align: center;
  margin: 3rem 0 5rem;
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`

export const Footer = styled.footer`
  font-size: 1.4rem;
  color: white;

  a,
  span {
    color: #f231a5;
  }
`
