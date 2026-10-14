import { Clock, MapPin, Phone } from 'lucide-react'
import type { Contacts } from '../types'
import { CallButton } from './ui/CallButton'
import { Section } from './ui/Section'

interface LocationProps {
  contacts: Contacts
}

export function Location({ contacts }: LocationProps) {
  return (
    <Section id="location" title="Как нас найти">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <dl className="space-y-6">
          <div className="flex gap-3">
            <MapPin className="mt-1 size-5 shrink-0" aria-hidden="true" />
            <div>
              <dt className="text-sm text-black/60">Адрес</dt>
              <dd className="text-lg font-medium">{contacts.addressFull}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="mt-1 size-5 shrink-0" aria-hidden="true" />
            <div>
              <dt className="text-sm text-black/60">Часы работы</dt>
              {contacts.hours.map((item) => (
                <dd key={item.days} className="text-lg font-medium">
                  {item.days}: <span className="tabular-nums">{item.time}</span>
                </dd>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-1 size-5 shrink-0" aria-hidden="true" />
            <div>
              <dt className="text-sm text-black/60">Телефон</dt>
              <dd className="text-lg font-medium">
                <a href={`tel:${contacts.phoneHref}`} className="tabular-nums underline-offset-4 hover:underline">
                  {contacts.phoneDisplay}
                </a>
              </dd>
            </div>
          </div>
          <CallButton phoneHref={contacts.phoneHref} size="lg" className="w-full md:w-auto" />
        </dl>
        <div className="h-80 overflow-hidden rounded-lg border border-black/10 md:h-96 lg:h-full lg:min-h-96">
          <iframe
            src={contacts.mapEmbedUrl}
            title={`Барбершоп «${contacts.name}» на карте: ${contacts.addressFull}`}
            loading="lazy"
            allowFullScreen
            className="size-full border-0"
          />
        </div>
      </div>
    </Section>
  )
}
