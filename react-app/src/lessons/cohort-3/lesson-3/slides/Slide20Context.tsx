import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide20Context({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">19</span>
      <h2 className="reveal">Контекст — главное оружие</h2>
      <ul className="content-list stagger-list">
        <li>Раньше инжиниринг был на уровне кода, сейчас на уровне <strong>контекста для LLM</strong></li>
        <li>Контекстное окно ограничено — управляйте контекстом как оперативной памятью</li>
        <li>Внимание модели <strong>падает</strong> с увеличением контекста — каждый лишний токен = шум, ухудшающий качество</li>
      </ul>
    </>
  )
}
