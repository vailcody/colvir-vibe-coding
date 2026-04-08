import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide20ContextKing({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">19</span>
      <h2 className="reveal">Контекст is King</h2>
      <ul className="content-list stagger-list" style={{ marginBottom: '1rem' }}>
        <li>Раньше инжиниринг был на уровне кода, сейчас на уровне <strong>контекста для LLM</strong></li>
        <li>Контекстное окно ограничено — управляйте контекстом как оперативной памятью</li>
        <li>Внимание модели <strong>падает</strong> с увеличением контекста — каждый лишний токен = шум, ухудшающий качество</li>
      </ul>
      <img src={`${BASE}cohort-3/lesson-3/img/context-arena.jpg`} alt="OpenAI MRCR: Context Arena benchmark" className="reveal" style={{ width: '100%', maxWidth: 1100, borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
    </>
  )
}
