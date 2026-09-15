import { useState } from 'react'
import { site } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'

const practiceOptions = [
  'Enterprise Software & Web Platforms',
  'Cloud Infrastructure & DevOps',
  'GIS, LiDAR & BIM Engineering',
  'AI & Data Analytics',
  'UI/UX & Digital Product Design',
  'Cyber Security & Compliance Audit',
]

const timelineLabels = {
  1: 'Rapid Sprint (< 1 Month)',
  2: '1 to 3 Months (MVP / Phase 1)',
  3: '3 to 6 Months (Enterprise Core)',
  4: '6+ Months (Multi-year Program)',
}

const guarantees = [
  { icon: 'policy', text: 'Immediate NDA protection prior to any technical disclosure', color: 'text-tertiary' },
  { icon: 'assessment', text: 'Custom feasibility & cost-optimization audit report included', color: 'text-secondary' },
  { icon: 'groups', text: 'Direct access to Senior Leadership & Distinguished Engineers', color: 'text-primary' },
]

const contactChips = [
  { icon: 'mail', label: site.email, href: `mailto:${site.email}` },
  { icon: 'call', label: site.phone, href: site.phoneHref },
  { icon: 'chat', label: 'WhatsApp Us', href: site.whatsappMessage },
]

export const ContactSection = () => {
  const [timeline, setTimeline] = useState(2)
  const [form, setForm] = useState({ name: '', email: '', practice: practiceOptions[0], message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', practice: practiceOptions[0], message: '' })
  }

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-surface py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-secondary-container/10 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-primary-container/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-outline/20 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] lg:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* Left: pitch */}
              <div className="flex flex-col justify-between gap-8 lg:col-span-6">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-label-sm text-label-sm text-primary">
                    <Icon name="calendar_month" size="text-[16px]" />
                    Direct Architectural Advisory
                  </span>
                  <h2 className="mt-4 font-headline-xl text-headline-xl-mobile text-on-surface lg:text-headline-xl">
                    Ready to Elevate Your <span className="text-gradient">Engineering Capabilities?</span>
                  </h2>
                  <p className="mt-3 max-w-xl font-body-md text-body-md text-on-surface-variant">
                    Schedule a 45-minute confidential architecture strategy session with our Principal
                    Engineers and Systems Directors. Zero pitch decks, 100% technical insights.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {guarantees.map((g) => (
                    <div key={g.text} className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface">
                      <Icon name="check_circle" size="text-[20px]" className={g.color} />
                      {g.text}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {contactChips.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-outline/25 bg-surface-container-lowest/50 px-4 py-2 font-label-sm text-label-sm text-on-surface transition-all hover:border-primary-container/50 hover:text-primary"
                    >
                      <Icon name={c.icon} size="text-[16px]" className="text-tertiary" />
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: booker */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-outline/20 bg-surface-container-lowest/90 p-6 shadow-xl backdrop-blur-xl lg:p-7">
                  <h3 className="mb-5 font-title-md text-title-md text-on-surface">
                    Book an Architectural Consultation
                  </h3>

                  {sent ? (
                    <div className="flex min-h-[26rem] flex-col items-center justify-center gap-4 text-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-container/25 text-tertiary">
                        <Icon name="task_alt" size="text-[32px]" />
                      </span>
                      <h4 className="font-headline-md text-headline-md text-on-surface">
                        Consultation Request Received
                      </h4>
                      <p className="max-w-xs font-body-sm text-body-sm text-on-surface-variant">
                        A Principal Solutions Architect will reach out within 2 business hours to
                        schedule your session.
                      </p>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-label-sm text-label-sm text-on-surface-variant">
                            Full Name
                          </label>
                          <input
                            className="input-field"
                            type="text"
                            required
                            placeholder="e.g. Alex Henderson"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-label-sm text-label-sm text-on-surface-variant">
                            Work Email
                          </label>
                          <input
                            className="input-field"
                            type="email"
                            required
                            placeholder="alex@enterprise.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block font-label-sm text-label-sm text-on-surface-variant">
                          Primary Practice Area
                        </label>
                        <select
                          className="input-field appearance-none"
                          value={form.practice}
                          onChange={(e) => setForm({ ...form, practice: e.target.value })}
                        >
                          {practiceOptions.map((p) => (
                            <option key={p} className="bg-surface-container">
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <div className="mb-1.5 flex items-center justify-between">
                          <label className="font-label-sm text-label-sm text-on-surface-variant">
                            Project Target Timeline
                          </label>
                          <span className="font-mono text-caption text-tertiary">
                            {timelineLabels[timeline]}
                          </span>
                        </div>
                        <input
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-surface-container accent-primary"
                          type="range"
                          min="1"
                          max="4"
                          step="1"
                          value={timeline}
                          onChange={(e) => setTimeline(parseInt(e.target.value, 10))}
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block font-label-sm text-label-sm text-on-surface-variant">
                          Project Context or Key Objectives
                        </label>
                        <textarea
                          className="input-field resize-none"
                          rows="3"
                          placeholder="Tell us about your current stack, timelines, or primary operational bottlenecks..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-cta w-full justify-center"
                      >
                        Confirm Advisory Session
                        <Icon name="calendar_today" size="text-[18px]" />
                      </button>
                      <p className="text-center font-caption text-caption text-outline">
                        Average response time: under 2 hours
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}