import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide03Recap({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">Где мы остановились</h2>
      <p className="subtitle reveal">Лекция 1 — краткий обзор</p>
      <ul className="content-list stagger-list">
        <li>Что такое вайб-кодинг</li>
        <li>Карта инструментов</li>
        <li>Анализ конкурентов</li>
        <li>Создание прототипа в Bolt/Replit/Харви</li>
        <li>Методология «сверху вниз»</li>
      </ul>
    </>
  )
}
