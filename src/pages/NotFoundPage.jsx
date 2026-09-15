import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'

export const NotFoundPage = () => (
  <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-32 pb-16 lg:pt-40">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-container/10 blur-3xl" />
    </div>
    <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-gutter-mobile text-center lg:px-gutter-desktop">
      <span className="font-headline-2xl text-headline-2xl-mobile text-gradient lg:text-headline-2xl">404</span>
      <h1 className="mt-2 font-headline-lg text-headline-lg-mobile text-on-surface lg:text-headline-lg">
        Page not found
      </h1>
      <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
        The page you are looking for was moved, renamed, or never existed. Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="btn-cta">
          <span>Go Home</span>
          <Icon name="home" size="text-[18px]" />
        </Link>
        <Link to="/contact" className="btn-glass">
          Contact Us
        </Link>
      </div>
    </div>
  </section>
)