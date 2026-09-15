import { Icon } from './Icon'

export const SectionHeading = ({
  eyebrow,
  icon,
  title,
  gradientWord,
  description,
  align = 'left',
  accent = 'text-primary',
}) => {
  const centered = align === 'center'
  return (
    <div className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : 'items-start'}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest ${accent}`}
      >
        {icon && <Icon name={icon} size="text-[14px]" />}
        {eyebrow}
      </span>
      <h2 className="font-headline-xl text-headline-xl-mobile text-on-surface lg:text-headline-xl max-w-3xl tracking-tight">
        {title}{' '}
        {gradientWord && <span className="text-gradient">{gradientWord}</span>}
      </h2>
      {description && (
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl lg:max-w-3xl">
          {description}
        </p>
      )}
    </div>
  )
}