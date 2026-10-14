import { Phone } from 'lucide-react'

interface CallButtonProps {
  phoneHref: string
  label?: string
  size?: 'md' | 'lg'
  className?: string
}

const sizeClasses: Record<NonNullable<CallButtonProps['size']>, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function CallButton({ phoneHref, label = 'Позвонить', size = 'md', className = '' }: CallButtonProps) {
  return (
    <a
      href={`tel:${phoneHref}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-black font-medium text-white transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${sizeClasses[size]} ${className}`}
    >
      <Phone className="size-4" aria-hidden="true" />
      {label}
    </a>
  )
}
