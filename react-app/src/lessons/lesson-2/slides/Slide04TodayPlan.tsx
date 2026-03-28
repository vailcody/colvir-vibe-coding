import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide04TodayPlan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">План доработки проекта</h2>
      <div className="flow-diagram reveal">
        <div className="flow-node">Файл</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node highlighted">Dify</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">Тест-кейсы</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node highlighted">API</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">БД</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node highlighted">UI</div>
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '2rem' }}>
        <li>Dify — создаём AI-воркфлоу для генерации тест-кейсов</li>
        <li>Cursor — оживляем бэкенд (API + база данных)</li>
        <li>Cursor — подключаем фронтенд к реальным данным</li>
        <li>Настройки, MCP, правила, контекст</li>
        <li>Стратегии работы с ошибками агентов</li>
      </ul>
    </>
  )
}
