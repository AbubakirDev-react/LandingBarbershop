import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-b border-black/10 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight md:mb-10 md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}
