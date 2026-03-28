import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide22MCP({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">21</span>
      <h2 className="reveal">MCP</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1.5rem' }}>Model Context Protocol — расширения для AI-агента</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Что это?</h3>
          <p>Стандартный протокол, который даёт AI-агенту доступ к внешним инструментам: базы данных, API, файловые системы, браузер.</p>
        </div>
        <div className="card">
          <h3>Как подключить</h3>
          <p>.cursor/mcp.json — один JSON-файл. Cursor автоматически подхватит все описанные серверы и покажет доступные инструменты.</p>
        </div>
        <div className="card">
          <h3>Полезные MCP</h3>
          <ul>
            <li>🗄 PostgreSQL — агент пишет и проверяет запросы</li>
            <li>🌐 Browser — агент видит UI приложения</li>
            <li>📋 Figma — агент читает макеты</li>
            <li>📁 Filesystem — расширенная работа с файлами</li>
          </ul>
        </div>
        <div className="card">
          <h3>Результат</h3>
          <p>Агент не просто пишет код — он проверяет результат. Написал SQL → выполнил → увидел ошибку → исправил. Полный цикл.</p>
        </div>
      </div>
    </>
  )
}
