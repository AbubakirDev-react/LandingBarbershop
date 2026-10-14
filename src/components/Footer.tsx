import type { Contacts } from '../types'

interface FooterProps {
  contacts: Contacts
}

const currentYear = new Date().getFullYear()

export function Footer({ contacts }: FooterProps) {
  return (
    <footer className="py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-black/60 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {currentYear} Барбершоп «{contacts.name}»
        </p>
        <p>
          {contacts.addressShort} ·{' '}
          <a href={`tel:${contacts.phoneHref}`} className="tabular-nums underline-offset-4 hover:underline">
            {contacts.phoneDisplay}
          </a>
        </p>
      </div>
    </footer>
  )
}
