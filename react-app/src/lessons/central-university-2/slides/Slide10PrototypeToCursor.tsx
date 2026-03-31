import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide10PrototypeToCursor({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">10</span>
      <h2 className="reveal">Из прототипа в Cursor</h2>
      <div className="steps">
        <div className="step reveal">
          <span className="step-number">01</span>
          <span className="step-text">Экспорт проекта из Bolt/Replit/Харви (ZIP)</span>
          <span className="step-desc">Bolt и Replit: интеграция с GitHub. Харви: скачиваем ZIP</span>
        </div>
        <div className="step reveal">
          <span className="step-number">02</span>
          <span className="step-text">Открываем в Cursor</span>
          <span className="step-desc">Перетаскиваем папку в окно Cursor</span>
        </div>
        <div className="step reveal">
          <span className="step-number">03</span>
          <span className="step-text">Просим агента запустить локально</span>
          <span className="step-desc">«Запусти проект» — он сам установит зависимости</span>
        </div>
        <div className="step reveal">
          <span className="step-number">04</span>
          <span className="step-text">Проверяем что всё работает</span>
          <span className="step-desc">Открываем localhost, прокликиваем основные страницы</span>
        </div>
      </div>
    </>
  )
}
