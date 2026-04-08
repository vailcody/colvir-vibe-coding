import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = '/cohort-3/lesson-3/'

export default function Slide20Context({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">19</span>
      <h2 className="reveal">Контекст — главное оружие</h2>
      <img src={`${BASE}img/context-schema.png`} alt="Контекст агента Cursor" className="slide-image reveal" />
    </>
  )
}
