import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide07SDDEvolution({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">06</span>
      <h2 className="reveal">Эволюция подходов</h2>
      <div className="flow-diagram reveal" style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
        <div className="flow-node">Ручной код</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">Copilot</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">Vibe Coding</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node highlighted" style={{ background: 'var(--accent)', color: '#fff' }}>SDD</div>
      </div>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Что даёт SDD</h3>
          <p>Предсказуемость, воспроизводимость, передача контекста между агентами и сессиями. Спека живёт в репо — не теряется.</p>
        </div>
        <div className="card">
          <h3>Спецификации генерируют код</h3>
          <p>Код — не главный артефакт. Спецификация напрямую генерирует реализацию, а не просто направляет её.</p>
        </div>
      </div>
    </>
  )
}
