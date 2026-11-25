import CounterButton from './CounterButton.jsx'
import { counterCopy } from '../data/counter.js'

export default function CounterCard({ count, isPulsing, onIncrement, onDecrement }) {
  return (
    <article className="w-full bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-xl flex flex-col items-center gap-gutter-xl">
      <header className="w-full flex flex-col items-center gap-gutter-xs text-center">
        <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
          {counterCopy.title}
        </h1>
        <p className="font-body text-body-md text-light-on-surface-variant">
          {counterCopy.subtitle}
        </p>
      </header>

      <div className="w-full bg-light-surface-container-low rounded-lg py-section px-gutter-xl flex items-center justify-center">
        <span
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={`font-display text-display-lg-mobile md:text-display-lg text-light-on-surface tabular-nums transform transition-transform duration-state-change ease-state-change ${
            isPulsing ? 'scale-105' : ''
          }`}
        >
          {count}
        </span>
      </div>

      <footer className="w-full grid grid-cols-2 gap-gutter-md">
        <CounterButton
          variant="secondary"
          icon="remove"
          label={counterCopy.decrementLabel}
          ariaLabel="Decrement count"
          onClick={onDecrement}
        />
        <CounterButton
          variant="primary"
          icon="add"
          label={counterCopy.incrementLabel}
          ariaLabel="Increment count"
          onClick={onIncrement}
        />
      </footer>
    </article>
  )
}
