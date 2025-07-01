import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Counter } from './Counter'

describe('Counter', () => {
  it('초기값 0으로 카운터를 렌더링한다', () => {
    render(<Counter />)
    expect(screen.getByText('카운트: 0')).toBeInTheDocument()
  })

  it('증가 버튼을 클릭하면 카운트가 1 증가한다', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementButton = screen.getByRole('button', { name: '증가' })
    await user.click(incrementButton)
    
    expect(screen.getByText('카운트: 1')).toBeInTheDocument()
  })

  it('감소 버튼을 클릭하면 카운트가 1 감소한다', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const decrementButton = screen.getByRole('button', { name: '감소' })
    await user.click(decrementButton)
    
    expect(screen.getByText('카운트: -1')).toBeInTheDocument()
  })

  it('초기값을 props로 받을 수 있다', () => {
    render(<Counter initialValue={5} />)
    expect(screen.getByText('카운트: 5')).toBeInTheDocument()
  })

  it('리셋 버튼을 클릭하면 초기값으로 돌아간다', async () => {
    const user = userEvent.setup()
    render(<Counter initialValue={10} />)
    
    // 카운터 값을 변경
    const incrementButton = screen.getByRole('button', { name: '증가' })
    await user.click(incrementButton)
    expect(screen.getByText('카운트: 11')).toBeInTheDocument()
    
    // 리셋
    const resetButton = screen.getByRole('button', { name: '리셋' })
    await user.click(resetButton)
    
    expect(screen.getByText('카운트: 10')).toBeInTheDocument()
  })
}) 