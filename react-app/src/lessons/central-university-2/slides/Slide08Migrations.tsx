import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide08Migrations({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Миграции БД</h2>
      <p className="subtitle reveal">Скрипты вместо ручных правок</p>
      <ul className="content-list stagger-list">
        <li>Каждое изменение БД = отдельный скрипт</li>
        <li>Скрипты хранятся в системе, как Git для данных</li>
        <li>Можно откатиться к любой версии</li>
        <li>Агенты часто сами внедряют миграции</li>
      </ul>
      <blockquote className="quote reveal" style={{ marginTop: '1.5rem' }}>
        Спросите агента: «Есть ли у меня миграции в проекте?»
      </blockquote>
    </>
  )
}
