import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'
import { faqs } from '../data/site'

export const FAQPage = () => {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHero page="faq" layout="stacked" />

      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-8">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={faq.question} delay={i * 40}>
                    <div
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? 'border-primary-container/40 bg-surface-container shadow-[0_0_24px_rgba(77,142,255,0.15)]'
                          : 'border-outline/15 bg-surface-container-low'
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="flex items-center gap-3 font-label-md text-label-md text-on-surface">
                          <span className={`hidden font-label-sm text-label-sm sm:block ${isOpen ? 'text-primary' : 'text-outline'}`}>
                            Q{i + 1}
                          </span>
                          {faq.question}
                        </span>
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen ? 'rotate-45 bg-primary text-on-primary' : 'bg-surface-container-high text-primary'
                          }`}
                        >
                          <Icon name="add" size="text-[18px]" />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="border-t border-outline/10 pt-4 font-body-md text-body-md text-on-surface-variant">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <aside className="lg:col-span-4">
              <Reveal delay={120}>
                <div className="edge-light relative overflow-hidden rounded-2xl border border-outline/20 bg-surface-container-low p-6 shadow-xl lg:sticky lg:top-24">
                  <div className="absolute inset-0 bg-elegance-gradient-soft opacity-20 blur-2xl" />
                  <div className="relative">
                    <span className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                      <Icon name="help" size="text-[16px]" className="text-tertiary" />
                      Still curious?
                    </span>
                    <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                      Every project has a question we haven't answered here. Ask us directly —
                      a real engineer replies, usually within a few hours.
                    </p>
                    <div className="mt-6 flex flex-col gap-2">
                      <Link to="/contact" className="btn-cta justify-center">
                        <span>Ask a Question</span>
                        <Icon name="arrow_forward" size="text-[16px]" />
                      </Link>
                      <Link to="/services" className="btn-glass justify-center">
                        <Icon name="apps" size="text-[18px]" className="text-tertiary" />
                        <span>Browse Services</span>
                      </Link>
                    </div>
                    <div className="mt-6 border-t border-outline/10 pt-4">
                      <p className="font-caption text-caption text-outline">
                        Average first response: <span className="text-on-surface">&lt; 4 hours</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}