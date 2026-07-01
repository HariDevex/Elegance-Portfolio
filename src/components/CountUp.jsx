import { useState, useEffect } from 'react'

export const CountUp = ({ value, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return <div className="count-up">{prefix}{count.toLocaleString()}{suffix}</div>
}
