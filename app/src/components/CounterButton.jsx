const variants = {
  primary: {
    colors:
      'bg-light-primary text-light-on-primary hover:opacity-95 focus-visible:outline-light-primary',
  },
  secondary: {
    colors:
      'bg-light-secondary-container text-light-on-secondary-container hover:opacity-90 focus-visible:outline-light-secondary',
  },
}

export default function CounterButton({
  variant = 'primary',
  icon,
  label,
  ariaLabel,
  onClick,
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-lg font-label text-label-lg transition-transform duration-state-change ease-state-change active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ${variants[variant].colors}`}
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  )
}
