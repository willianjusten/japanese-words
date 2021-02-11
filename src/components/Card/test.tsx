import { render, screen } from '@testing-library/react'

import Card from '.'

describe('<Card />', () => {
  it('should render the correct elements', () => {
    const props = {
      image: 'gloves',
      hiragana: 'てぶくろ',
      kanji: '手袋',
      romanji: 'te-bu-ku-ro',
      meaning: 'gloves'
    }

    render(<Card {...props} />)

    expect(screen.getByText(props.hiragana)).toBeInTheDocument()
    expect(screen.getByText(props.kanji)).toBeInTheDocument()
    expect(screen.getByText(`[ ${props.meaning} ]`)).toBeInTheDocument()
    expect(screen.getByText(props.romanji)).toBeInTheDocument()
  })
})
