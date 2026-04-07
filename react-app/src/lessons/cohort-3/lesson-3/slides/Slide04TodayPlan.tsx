import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04TodayPlan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">План на сегодня</h2>
      <div className="steps stagger-list">
        <div className="step">
          <span className="step-number">01</span>
          <div>
            <span className="step-text">Rules для MCP-сервера</span>
            <p className="step-desc">Правила проекта — как на прошлом занятии</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div>
            <span className="step-text">SDD: Теория + OpenSpec</span>
            <p className="step-desc">Spec-Driven Development. Kiro → Spec Kit → OpenSpec — 15 мин</p>
          </div>
        </div>
        <div className="step highlighted">
          <span className="step-number" style={{ background: 'var(--accent)', color: '#fff' }}>03</span>
          <div>
            <span className="step-text">Практика: Спеки → Apply → MCP-сервер</span>
            <p className="step-desc">OpenSpec propose → ревью спеков → apply. Пока агент работает — теория MCP — 30 мин</p>
          </div>
        </div>
      </div>
    </>
  )
}
