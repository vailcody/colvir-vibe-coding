import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide06Templates({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">06</span>
      <h2 className="reveal">Шаблоны</h2>
      <p className="reveal" style={{ marginBottom: '1rem', opacity: 0.8 }}>
        Пока не понятны перспективы, но покупка готового шаблона всё ещё остаётся быстрее вайб-кодинга.
      </p>
      <div className="reveal" style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Плюсы</h3>
        <ul className="content-list stagger-list">
          <li>Не нужно искать клиентов</li>
          <li>Доход абсолютно пассивный</li>
          <li>Рынок международный</li>
        </ul>
      </div>
      <p className="reveal" style={{ marginBottom: '0.5rem' }}>
        💡 <strong>Лайфхак:</strong> Выбрать супер популярную платформу, типа WordPress
      </p>
      <p className="reveal">
        📌 <strong>Мой кейс:</strong> Продавал шаблоны и плагины на ImageCMS в 2014 году —{' '}
        <a href="https://habr.com/ru/articles/245289/" target="_blank" rel="noopener noreferrer">habr.com/ru/articles/245289/</a>
      </p>
    </>
  )
}
