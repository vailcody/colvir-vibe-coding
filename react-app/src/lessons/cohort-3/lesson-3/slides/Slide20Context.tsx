import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide20Context({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">19</span>
      <h2 className="reveal">Контекст — главное оружие</h2>
      <img src={`${BASE}cohort-3/lesson-3/img/context-schema.png`} alt="Контекст агента Cursor" className="reveal" style={{ width: '100%', maxWidth: 1400, borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '0.5rem' }} />
    </>
  )
}
