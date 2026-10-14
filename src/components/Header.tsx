import type { Contacts } from '../types'
import { CallButton } from './ui/CallButton'

interface HeaderProps {
  contacts: Contacts
}

export function Header({ contacts }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight uppercase md:text-2xl">{contacts.name}</span>
          <span className="mt-1 text-xs text-black/60">Барбершоп · мастер {contacts.master}</span>
        </a>
        <CallButton phoneHref={contacts.phoneHref} />
      </div>
    </header>
  )
}
