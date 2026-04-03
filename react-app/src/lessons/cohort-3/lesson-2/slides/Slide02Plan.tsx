import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">План занятия</h2>
      <ul className="content-list stagger-list">
        <li>Подходы к мобильной разработке — выбор технологии</li>
        <li>Инструменты: Rork и SuperApp для вайб-кодинга</li>
        <li>Практика: голосовые заметки с транскрибацией</li>
        <li>Бэкенд: FastAPI + карта фреймворков</li>
        <li>Подключение Mistral для транскрибации</li>
        <li>Тестирование через Expo Go</li>
      </ul>
    </>
  )
}
