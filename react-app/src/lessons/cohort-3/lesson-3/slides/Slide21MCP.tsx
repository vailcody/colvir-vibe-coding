import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide21MCP({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">20</span>
      <h2 className="reveal">MCP</h2>
      <p className="subtitle reveal">Model Context Protocol — расширения для AI-агента</p>
      <h3 className="reveal">Что это?</h3>
      <p className="reveal">Стандартный протокол, который даёт AI-агенту доступ к внешним инструментам: базы данных, API, файловые системы, браузер.</p>
      <h3 className="reveal">Как подключить</h3>
      <p className="reveal"><code>.cursor/mcp.json</code> — один JSON-файл. Cursor автоматически подхватит все описанные серверы и покажет доступные инструменты.</p>
      <h3 className="reveal">Полезные MCP</h3>
      <ul className="content-list stagger-list">
        <li>🗄 <strong>PostgreSQL</strong> — агент пишет и проверяет запросы</li>
        <li>🌐 <strong>Browser</strong> — агент видит UI приложения</li>
        <li>📋 <strong>Figma</strong> — агент читает макеты</li>
        <li>📁 <strong>Filesystem</strong> — расширенная работа с файлами</li>
      </ul>
    </>
  )
}
