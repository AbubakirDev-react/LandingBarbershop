import { Scissors } from 'lucide-react'
import type { WorkItem } from '../types'
import { Section } from './ui/Section'

interface WorksProps {
  items: WorkItem[]
}

export function Works({ items }: WorksProps) {
  return (
    <Section id="works" title="Работы">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.id} className="aspect-square overflow-hidden rounded-lg bg-black/5">
            {item.src ? (
              <img src={item.src} alt={item.alt} loading="lazy" className="size-full object-cover" />
            ) : (
              <div role="img" aria-label={`${item.alt} (фото скоро появится)`} className="flex size-full items-center justify-center">
                <Scissors className="size-8 text-black/20" aria-hidden="true" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
