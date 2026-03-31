import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">План лекции</h2>
      <div className="steps">
        <div className="step reveal">
          <span className="step-number">01</span>
          <span className="step-text">Масштабируемый подход к разработке</span>
        </div>
        <div className="step reveal">
          <span className="step-number">02</span>
          <span className="step-text">Из прототипа в рабочий проект</span>
        </div>
        <div className="step reveal">
          <span className="step-number">03</span>
          <span className="step-text">Git и GitHub: версионирование</span>
        </div>
        <div className="step reveal">
          <span className="step-number">04</span>
          <span className="step-text">Рабочий workflow в Cursor</span>
        </div>
        <div className="step reveal">
          <span className="step-number">05</span>
          <span className="step-text">MCP — руки для AI</span>
        </div>
        <div className="step reveal">
          <span className="step-number">06</span>
          <span className="step-text">Контекст — главное оружие</span>
        </div>
        <div className="step reveal">
          <span className="step-number">07</span>
          <span className="step-text">[Бонус] Spec-Driven Development</span>
        </div>
      </div>
    </>
  )
}
