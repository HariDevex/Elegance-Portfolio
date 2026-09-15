import { clients } from '../data/site'
import { Icon } from '../components/Icon'

export const ClientLogosSection = () => {
  const row = (
    <div className="flex shrink-0 items-center gap-4 pr-4">
      {clients.map((c) => (
        <span
          key={c.name}
          className="flex items-center gap-2 rounded-xl border border-outline/15 bg-surface-container-low px-5 py-3 text-on-surface-variant transition-colors hover:border-primary-container/40 hover:text-on-surface"
        >
          <Icon name={c.icon} size="text-[20px]" className="text-primary/70" />
          <span className="font-label-sm text-label-sm">{c.name}</span>
        </span>
      ))}
    </div>
  )

  return (
    <section
      aria-label="Trusted by organizations"
      className="relative w-full overflow-hidden border-y border-outline/10 bg-surface-container-lowest py-8"
    >
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-outline/50" />
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
          Trusted by forward-thinking organizations
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-outline/50" />
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex">
          {row}
          {row}
        </div>
      </div>
    </section>
  )
}