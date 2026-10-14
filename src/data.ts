import type { Contacts, PriceGroup, Review, WorkItem } from './types'

export const contacts: Contacts = {
  name: 'Креатив',
  master: 'Бек',
  phoneDisplay: '+7 (995) 651-90-30',
  phoneHref: '+79956519030',
  addressFull: 'Челябинск, пр. Победы, 125',
  addressShort: 'пр. Победы, 125',
  hours: [
    { days: 'Пн–Сб', time: '10:00–20:00' },
    { days: 'Вс', time: '10:00–21:00' },
  ],
  // TODO: заменить на ссылку из конструктора Яндекс Карт с меткой барбершопа
  mapEmbedUrl:
    'https://yandex.ru/map-widget/v1/?mode=search&text=' +
    encodeURIComponent('Челябинск, проспект Победы, 125') +
    '&z=16',
}

export const prices: PriceGroup[] = [
  {
    id: 'haircuts',
    title: 'Стрижки',
    items: [
      { id: 'complex', title: 'Сложная и длинная причёска', price: 1000 },
      { id: 'model', title: 'Модельная причёска сбоку, с нуля', price: 800 },
      { id: 'youth', title: 'Молодёжная причёска сбоку, 3 мм', price: 700 },
      { id: 'two-guards', title: 'Две насадки (бокс)', price: 600 },
      { id: 'one-guard', title: 'Одна насадка', price: 500 },
      { id: 'no-guard', title: 'Без насадки', price: 400 },
    ],
  },
  {
    id: 'beard',
    title: 'Борода и бритьё',
    items: [
      { id: 'beard-shave-machine', title: 'Бритьё бороды машинкой', price: 400 },
      { id: 'beard-trim-machine', title: 'Оформление бороды машинкой', price: 500 },
      { id: 'head-razor', title: 'Бритьё головы опасной бритвой', price: 800 },
      { id: 'beard-razor', title: 'Бритьё бороды опасной бритвой', price: 800 },
    ],
  },
  {
    id: 'toning',
    title: 'Тонирование',
    items: [
      { id: 'toning-hair', title: 'Тонирование волос', price: 500 },
      { id: 'toning-beard', title: 'Тонирование бороды', price: 500 },
    ],
  },
  {
    id: 'kids',
    title: 'Детские стрижки',
    items: [
      { id: 'kids-box', title: 'Бокс', price: 500 },
      { id: 'kids-youth', title: 'Молодёжная', price: 600 },
      { id: 'kids-model', title: 'Модельная', price: 700 },
    ],
  },
]

// Фото лежат в public/works
export const works: WorkItem[] = [
  { id: 'work-1', src: '/works/1.jpg', alt: 'Работа мастера 1' },
  { id: 'work-2', src: '/works/2.jpg', alt: 'Работа мастера 2' },
  { id: 'work-3', src: '/works/3.jpg', alt: 'Работа мастера 3' },
  { id: 'work-4', src: '/works/4.jpg', alt: 'Работа мастера 4' },
  { id: 'work-5', src: '/works/5.jpg', alt: 'Работа мастера 5' },
  { id: 'work-6', src: '/works/6.jpg', alt: 'Работа мастера 6' },
  { id: 'work-7', src: '/works/7.jpg', alt: 'Работа мастера 7' },
  { id: 'work-8', src: '/works/8.jpg', alt: 'Работа мастера 8' },
]

// Реальные отзывы клиентов из 2ГИС
// TODO: добавить оценки (rating), если нужны звёзды
export const reviews: Review[] = [
  {
    id: 'review-1',
    author: 'Иван О.',
    text: 'Очень понравилась стрижка!!! Спасибо. Мастер великолепен, руками работает с волосами аж мураши высыпают. Рекомендую',
    date: '7 августа 2026',
    source: '2ГИС',
    isDemo: false,
  },
  {
    id: 'review-2',
    author: 'Мика М.',
    text: 'Попали без записи, мастер Бек постриг очень хорошо, именно так как хотел сын. Цена порадовала. Рекомендуем!',
    date: '19 июля 2026',
    source: '2ГИС',
    isDemo: false,
  },
  {
    id: 'review-3',
    author: 'Эльдар З.',
    text: 'Работа барбера понравилась, хорошо и качественно постригли. Помещение требует ремонта, удачи и процветания. Буду обращаться в дальнейшем!',
    date: '24 мая 2025',
    source: '2ГИС',
    isDemo: false,
  },
]
