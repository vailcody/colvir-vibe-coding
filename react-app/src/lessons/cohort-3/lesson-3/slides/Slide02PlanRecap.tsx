import type { SlideProps } from '../../../../components/PresentationShell'

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
        <div className="plan-col">
          <h3>Занятие 2 <span className="plan-hours">2 часа ✓</span></h3>
          <h4>Оживляем прототип</h4>
          <ul>
            <li>Dify — AI-воркфлоу</li>
            <li>Cursor — режимы, контекст</li>
            <li>Rules, Skills, Hooks</li>
            <li>Субагенты, MCP</li>
            <li>Бэкенд + фронтенд (демо)</li>
            <li>Экономия токенов</li>
          </ul>
        </div>
        <div className="plan-col plan-col-active">
          <h3>Занятие 3 <span className="plan-hours">1 час ←</span></h3>
          <h4>SDD + Свой MCP-сервер</h4>
          <ul>
            <li>MCP под капотом</li>
            <li>Spec-Driven Development</li>
            <li>OpenSpec в Cursor</li>
            <li>Создаём MCP-сервер</li>
            <li>Подключаем к агенту</li>
          </ul>
          <div className="plan-hw">
            <strong>ДЗ:</strong> Расширить MCP-сервер + написать спеку
          </div>
        </div>
      </div>
    </>
  )
}
