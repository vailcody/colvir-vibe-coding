import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04Workflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">План доработки проекта</h2>
      <p className="workflow-path reveal">Файл → Dify → Тест-кейсы → API → БД → UI</p>
      <ul className="content-list stagger-list">
        <li><strong>Dify</strong> — создаём AI-воркфлоу для генерации тест-кейсов</li>
        <li><strong>Cursor</strong> — оживляем бэкенд (API + база данных)</li>
        <li><strong>Cursor</strong> — подключаем фронтенд к реальным данным</li>
        <li>Настройки, MCP, правила, контекст</li>
        <li>Стратегии работы с ошибками агентов</li>
      </ul>
    </>
  )
}
