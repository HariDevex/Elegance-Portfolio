export const Icon = ({ name, className = '', size = 'text-[20px]' }) => (
  <span
    className={`material-symbols-outlined ${size} ${className}`}
    aria-hidden="true"
  >
    {name}
  </span>
)