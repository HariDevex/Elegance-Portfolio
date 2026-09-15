import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export const CtaBand = ({
  title = 'Ready to elevate your engineering capabilities?',
  description = 'Book a confidential 45-minute architecture strategy session. Zero pitch decks, 100% technical insights.',
  cta = 'Book a Free Consultation',
  to = '/contact',
}) => (
  <section className="w-full bg-surface py-12 lg:py-16">
    <div className="mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
      <div className="relative overflow-hidden rounded-3xl border border-outline/20 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] lg:p-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 right-10 h-56 w-56 rounded-full bg-primary-container/15 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-secondary-container/10 blur-3xl" />
        </div>
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface lg:text-headline-lg">
              {title}
            </h2>
            <p className="mt-2 font-body-md text-body-md text-on-surface-variant">{description}</p>
          </div>
          <Link to={to} className="btn-cta shrink-0">
            <span>{cta}</span>
            <Icon name="arrow_forward" size="text-[18px]" />
          </Link>
        </div>
      </div>
    </div>
  </section>
)