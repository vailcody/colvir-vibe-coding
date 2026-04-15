import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide14GoldenWorkflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">13</span>
      <h2 className="reveal">Золотой workflow</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1.5rem' }}>Как правильно работать с Cursor</p>
      <div className="flow-diagram reveal" style={{ marginBottom: '2rem' }}>
        <div className="flow-node">Rules</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node highlighted">Plan</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node highlighted" style={{ background: 'var(--accent)', color: '#fff' }}>Agent</div>
      </div>
      <div className="steps stagger-list">
        <div className="step">
          <span className="step-number">01</span>
          <div>
            <span className="step-text">Rules — настрой правила проекта</span>
            <p className="step-desc">.cursor/rules — стек, конвенции, структура. Один раз — работает на все сессии</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div>
            <span className="step-text">Plan — декомпозиция задачи</span>
            <p className="step-desc">Верхнеуровневое описание → агент разбивает на шаги. Ревью → Build Plan</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <div>
            <span className="step-text">Agent — выполнение</span>
            <p className="step-desc">Агент выполняет план. Ревью каждого diff. Checkpoint → откат если что</p>
          </div>
        </div>
      </div>
    </>
  )
}
