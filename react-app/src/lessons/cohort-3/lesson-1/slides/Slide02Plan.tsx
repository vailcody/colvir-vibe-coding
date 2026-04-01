import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">О чём сегодня поговорим?</h2>
      <ul className="content-list stagger-list">
        <li>Способы монетизации навыков вайб-кодинга</li>
        <li>Выбор ниши и валидация идеи</li>
        <li>Основные облачные инструменты: v0, Lovable, Replit, Harvi</li>
        <li>Как работать с этими платформами</li>
        <li>Особенности технологического стека</li>
      </ul>
    </>
  )
}
