import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide02PlanRecap({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">01</span>
      <h2 className="reveal">План обучения</h2>
      <div className="plan-grid reveal">
        <div className="plan-col">
          <h3>Занятие 1 <span className="plan-hours">1 час ✓</span></h3>
          <h4>Создаём прототип</h4>
          <ul>
            <li>Введение в вайбкодинг</li>
            <li>Карта инструментов</li>
            <li>Прототип в Харви</li>
            <li>Запустили локально</li>
          </ul>
        </div>
        <div className="plan-col plan-col-active">
          <h3>Занятие 2 <span className="plan-hours">2 часа ←</span></h3>
          <h4>Оживляем прототип</h4>
          <ul>
            <li>Dify — AI-воркфлоу</li>
            <li>Cursor — режимы, контекст</li>
            <li>Rules, Skills, Hooks</li>
            <li>Субагенты, MCP</li>
            <li>Бэкенд + фронтенд (демо)</li>
            <li>Экономия токенов</li>
          </ul>
          <div className="plan-hw">
            <strong>ДЗ:</strong> Настроить проект и оживить прототип
          </div>
        </div>
        <div className="plan-col">
          <h3>Занятие 3 <span className="plan-hours">1 час</span></h3>
          <h4>Продвинутый вайбкодинг</h4>
          <ul>
            <li>Spec-Driven Development</li>
            <li>Свой MCP-сервер</li>
            <li>Feedback loop</li>
          </ul>
        </div>
      </div>
    </>
  )
}
