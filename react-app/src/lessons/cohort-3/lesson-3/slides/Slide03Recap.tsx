import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide03Recap({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">Где мы остановились</h2>
      <ul className="content-list stagger-list">
        <li><strong>Прототип в браузерном агенте</strong> — кликабельный, но ничего не работает ✓</li>
        <li><strong>Скачали код и запустили локально</strong> — npm install → npm run dev ✓</li>
        <li><strong>Оживляем!</strong> → подключаем AI-бэкенд, базу данных, реальную логику</li>
      </ul>
    </>
  )
}
