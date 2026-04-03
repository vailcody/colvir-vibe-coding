import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04WhyExpo({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Почему Expo для вайб-кодинга</h2>
      <ul className="content-list stagger-list">
        <li>Знакомый стек — JavaScript / TypeScript, близко к вебу</li>
        <li>Expo Go — мгновенный preview на телефоне по QR-коду без сборки</li>
        <li>Огромная npm-экосистема — готовые компоненты на всё</li>
        <li>Модели хорошо знают React Native — качественная генерация кода</li>
      </ul>
      <div className="quote reveal">
        Всё, что может сломаться — делайте на бэкенде. Бэкенд поправили и выкатили за минуты. Обновление мобилки через сторы = минимум 2 дня проверки.
      </div>
    </>
  )
}
