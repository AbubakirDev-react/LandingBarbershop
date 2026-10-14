export interface PriceItem {
  id: string
  title: string
  /** Цена в рублях */
  price: number
}

export interface PriceGroup {
  id: string
  title: string
  items: PriceItem[]
}

export interface WorkItem {
  id: string
  /** Путь к фото в /public; null — фото ещё нет, рисуется заглушка */
  src: string | null
  alt: string
}

export interface Review {
  id: string
  author: string
  text: string
  /** Дата отзыва в читаемом виде */
  date?: string
  /** Оценка от 1 до 5; не указана — звёзды не показываются */
  rating?: 1 | 2 | 3 | 4 | 5
  /** Откуда взят отзыв, например «2ГИС» */
  source?: string
  /** Демо-отзыв: не настоящий, помечается на странице */
  isDemo: boolean
}

export interface WorkingHours {
  days: string
  time: string
}

export interface Contacts {
  name: string
  master: string
  /** Телефон в читаемом виде */
  phoneDisplay: string
  /** Телефон для ссылки tel: — только «+» и цифры */
  phoneHref: string
  addressFull: string
  addressShort: string
  hours: WorkingHours[]
  /** Ссылка для iframe Яндекс Карт */
  mapEmbedUrl: string
}
