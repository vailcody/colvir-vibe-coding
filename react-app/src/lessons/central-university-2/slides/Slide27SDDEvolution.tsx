import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide27SDDEvolution({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">27</span>
      <h2 className="reveal">Эволюция подходов</h2>
      <div className="flow-diagram reveal">
        <div className="flow-node">«Сделай сайт»</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Промпт-инжиниринг</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Rules</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node highlighted">SDD</div>
      </div>
      <div className="card highlighted reveal" style={{ marginTop: '1.5rem' }}>
        <p>Каждый уровень даёт больше контроля и предсказуемости. SDD = максимальная точность агента.</p>
      </div>
    </>
  )
}
