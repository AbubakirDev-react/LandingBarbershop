import { Star } from 'lucide-react'
import type { Review } from '../types'
import { Section } from './ui/Section'

interface ReviewsProps {
  items: Review[]
}

const MAX_RATING = 5

export function Reviews({ items }: ReviewsProps) {
  return (
    <Section id="reviews" title="Отзывы">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((review) => (
          <li key={review.id} className="flex flex-col rounded-lg border border-black/10 p-6">
            {(review.rating !== undefined || review.isDemo) && (
              <div className="mb-4 flex items-center justify-between gap-4">
                {review.rating !== undefined && (
                  <div className="flex gap-0.5" role="img" aria-label={`Оценка ${review.rating} из ${MAX_RATING}`}>
                    {Array.from({ length: MAX_RATING }, (_, index) => (
                      <Star
                        key={index}
                        className={`size-4 ${index < (review.rating ?? 0) ? 'fill-black text-black' : 'text-black/20'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}
                {review.isDemo && (
                  <span className="rounded-full border border-black/20 px-2 py-0.5 text-xs text-black/60">Демо-отзыв</span>
                )}
              </div>
            )}
            <p className="grow text-base leading-relaxed">{review.text}</p>
            <div className="mt-4">
              <p className="text-sm font-medium">{review.author}</p>
              {(review.date || review.source) && (
                <p className="mt-0.5 text-xs text-black/60">
                  {[review.date, review.source && `отзыв из ${review.source}`].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
