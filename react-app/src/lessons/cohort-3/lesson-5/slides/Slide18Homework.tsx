import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide18Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">18</span>
      <h2 className="reveal">Домашнее задание</h2>

      <ul className="content-list stagger-list">
        <li>Упаковать свой проект в Docker</li>
        <li>Запустить его локально в контейнере</li>
      </ul>
    </>
  )
}