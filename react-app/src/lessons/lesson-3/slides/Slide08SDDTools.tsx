import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide08SDDTools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">07</span>
      <h2 className="reveal">SDD: Инструменты</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Kiro (AWS)</h3>
          <p>Первородитель подхода. Отдельная IDE (форк VS Code). Requirements → Design → Tasks. Agent Hooks для автоматизации.</p>
        </div>
        <div className="card">
          <h3>Spec Kit (GitHub)</h3>
          <p>Open source CLI. Constitution → Specify → Plan → Tasks → Implement. Тяжеловесный, TDD-first, жёсткие фазы.</p>
        </div>
        <div className="card highlighted">
          <h3>OpenSpec (Fission AI / YC)</h3>
          <p>Лёгкий npm-пакет. Гибкий, без жёстких гейтов. 20+ AI-инструментов. Идеален для brownfield.</p>
        </div>
      </div>
      <div className="flow-diagram reveal" style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
        <div className="flow-node" style={{ fontSize: '0.75rem' }}>Tessl</div>
        <div className="flow-node" style={{ fontSize: '0.75rem' }}>BMAD</div>
        <div className="flow-node" style={{ fontSize: '0.75rem' }}>AIDE</div>
      </div>
    </>
  )
}
