export const Logo = ({ compact = false }) => (
  <span className="group flex items-center gap-2">
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl">
      <img
        src="/Logo.png"
        alt="Elegance Infotech logo"
        className="h-full w-full object-contain"
      />
    </span>
    {!compact && (
      <span className="flex flex-col leading-none">
        <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight transition-colors group-hover:text-primary">
          Elegance Infotech
        </span>
        <span className="font-caption text-caption text-outline tracking-[0.2em] uppercase">IT & Geo Infotech</span>
      </span>
    )}
  </span>
)