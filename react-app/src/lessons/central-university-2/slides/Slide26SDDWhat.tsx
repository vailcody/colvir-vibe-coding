import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide26SDDWhat({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">26</span>
      <h2 className="reveal">SDD: Разработка через спецификации</h2>
      <div className="steps">
        <div className="step reveal">
          <span className="step-number">01</span>
          <span className="step-text">Requirements</span>
          <span className="step-desc">Описываем ЧТО нужно сделать. User stories, acceptance criteria.</span>
        </div>
        <div className="step reveal">
          <span className="step-number">02</span>
          <span className="step-text">Design</span>
          <span className="step-desc">Описываем КАК это будет работать. Архитектура, API, схема БД.</span>
        </div>
        <div className="step reveal">
          <span className="step-number">03</span>
          <span className="step-text">Tasks</span>
          <span className="step-desc">Декомпозируем на конкретные задачи. Каждая задача = один коммит.</span>
        </div>
      </div>
    </>
  )
}
