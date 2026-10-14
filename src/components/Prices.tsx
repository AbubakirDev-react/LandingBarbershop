import type { PriceGroup } from '../types'
import { Section } from './ui/Section'

interface PricesProps {
  groups: PriceGroup[]
}

function formatPrice(price: number): string {
  return `${price.toLocaleString('ru-RU')} ₽`
}

export function Prices({ groups }: PricesProps) {
  return (
    <Section id="prices" title="Цены">
      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-2">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="border-b border-black pb-2 text-sm font-bold tracking-widest uppercase">{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.id} className="flex items-baseline justify-between gap-4 border-b border-black/10 py-3.5">
                  <p className="text-base font-medium md:text-lg">{item.title}</p>
                  <p className="shrink-0 text-base font-bold tabular-nums md:text-lg">{formatPrice(item.price)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
