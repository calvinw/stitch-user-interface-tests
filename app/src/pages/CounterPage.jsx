import { useCallback, useEffect, useRef, useState } from 'react'
import CounterCard from '../components/CounterCard.jsx'
import { counterCopy, initialCount } from '../data/counter.js'

export default function CounterPage() {
  const [count, setCount] = useState(initialCount)
  const [isPulsing, setIsPulsing] = useState(false)
  const pulseTimer = useRef(null)

  const bump = useCallback(() => {
    setIsPulsing(true)
    if (pulseTimer.current) clearTimeout(pulseTimer.current)
    pulseTimer.current = setTimeout(() => setIsPulsing(false), 100)
  }, [])

  useEffect(() => () => clearTimeout(pulseTimer.current), [])

  const increment = useCallback(() => {
    setCount((current) => current + 1)
    bump()
  }, [bump])

  const decrement = useCallback(() => {
    setCount((current) => current - 1)
    bump()
  }, [bump])

  const reset = useCallback(() => {
    if (count !== initialCount) {
      setCount(initialCount)
      bump()
    }
  }, [count, bump])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowUp' || event.key === '+' || event.key === '=') {
        event.preventDefault()
        increment()
      } else if (event.key === 'ArrowDown' || event.key === '-') {
        event.preventDefault()
        decrement()
      } else if (event.key === 'r' || event.key === 'R') {
        reset()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [increment, decrement, reset])

  return (
    <main className="min-h-screen w-full bg-light-surface flex flex-col items-center justify-center p-section">
      <div className="w-full max-w-md flex flex-col items-center gap-gutter-lg">
        <CounterCard
          count={count}
          isPulsing={isPulsing}
          onIncrement={increment}
          onDecrement={decrement}
        />

        <div className="flex flex-col items-center gap-gutter-sm">
          <button
            type="button"
            disabled={count === initialCount}
            onClick={reset}
            aria-label="Reset count"
            className="inline-flex items-center justify-center gap-gutter-sm px-gutter-md py-gutter-sm rounded-full bg-light-surface-container text-light-on-surface-variant border border-light-outline-variant transition-transform duration-state-change ease-state-change hover:bg-light-surface-container-high active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary disabled:bg-light-surface-container-low disabled:border-light-surface-variant disabled:cursor-not-allowed cursor-pointer"
          >
            <span className="material-symbols-outlined text-title-md" aria-hidden="true">
              restart_alt
            </span>
            <span className="font-label text-label-lg">{counterCopy.resetLabel}</span>
          </button>

          <span className="font-label text-label-sm text-light-on-surface-variant">
            {counterCopy.keyboardHint}
          </span>
        </div>
      </div>
    </main>
  )
}
