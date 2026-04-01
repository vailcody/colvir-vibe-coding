import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide12Evolution({}: SlideProps) {
  return (
    <div className="slide-evolution" style={{ alignItems: 'flex-start', width: '100%' }}>
      <span className="slide-number reveal">—</span>
      <h2 className="reveal" style={{ marginBottom: '2rem' }}>Вайб-кодинг зреет</h2>
      <div className="evolution-grid reveal">
        <div className="evo-item">MCP</div>
        <div className="evo-item">Скиллы</div>
        <div className="evo-item">Хуки</div>
        <div className="evo-item">Субагенты</div>
        <div className="evo-item">Rules-файлы</div>
        <div className="evo-item">AGENTS.md</div>
        <div className="evo-item">Background Agents</div>
        <div className="evo-item">Memory Bank</div>
        <div className="evo-item">Spec-Driven Development</div>
        <div className="evo-item">Мультиагентные системы</div>
      </div>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--text-secondary)', marginTop: '2.5rem', maxWidth: '100%' }}>
        Инструментов, подходов и фреймворков становится больше с каждым днём
      </p>
    </div>
  )
}
