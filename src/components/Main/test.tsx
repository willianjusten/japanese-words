import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Main from '.'

describe('<Main />', () => {
  it('should render the elements', () => {
    render(<Main />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(
      screen.getByRole('img', { name: /get new word/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Hear the pronunciation/i })
    ).toBeInTheDocument()
  })

  it('should change the word when clicking to get new word', () => {
    render(<Main />)

    const word = screen.getAllByRole('heading')[0].innerHTML

    userEvent.click(screen.getByRole('img', { name: /get new word/i }))

    const newWord = screen.getAllByRole('heading')[0].innerHTML

    expect(newWord).not.toEqual(word)
  })
})
