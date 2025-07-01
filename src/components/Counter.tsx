import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(initialValue)

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
    </div>
  )
} 