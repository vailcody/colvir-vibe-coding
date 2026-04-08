import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">01</span>
      <h2 className="reveal">План обучения</h2>
      <div className="plan-list">
        <div className="plan-item plan-item--done">
          <span className="plan-badge">Занятие 1</span>
          <strong>Создаём прототип</strong>
          <p>Введение в вайбкодинг · Карта инструментов · Прототип в Харви · Запустили локально</p>
        </div>
        <div className="plan-item plan-item--active">
          <span className="plan-badge">Занятие 2</span>
          <strong>Оживляем прототип</strong>
          <p>Dify · Cursor · Rules, Skills, Hooks · Субагенты, MCP · Бэкенд + фронтенд · Экономия токенов</p>
          <p className="homework"><strong>ДЗ:</strong> Настроить проект и оживить прототип</p>
        </div>
        <div className="plan-item">
          <span className="plan-badge">Занятие 3</span>
          <strong>Продвинутый вайбкодинг</strong>
          <p>Spec-Driven Development · Свой MCP-сервер · Feedback loop</p>
        </div>
      </div>
    </>
  )
}
