import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide06SDD({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">05</span>
      <h2 className="reveal">Spec-Driven Development</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1.5rem' }}>Спецификация — единый источник истины</p>
      <ul className="content-list stagger-list">
        <li><strong>Проблема промптов:</strong> одноразовые, теряются после сессии, не передаются между агентами</li>
        <li><strong>Спецификация</strong> — живой документ в репозитории, эволюционирует с проектом</li>
        <li>Акцент на <strong>что</strong> делаем и <strong>зачем</strong>, а не как — реализацию делает агент</li>
        <li>SDD — это <strong>продвинутый уровень вайб-кодинга</strong>, когда нужна предсказуемость и воспроизводимость</li>
      </ul>
    </>
  )
}
