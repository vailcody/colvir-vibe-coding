import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = '/cohort-3/lesson-3/'

export default function Slide11MCPTools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">10</span>
      <h2 className="reveal">Настройки: Tools & MCP</h2>
      <img src={`${BASE}img/settings-tools-mcp.jpg`} alt="Cursor Settings Tools MCP" className="slide-image reveal" />
      <ul className="content-list stagger-list">
        <li><strong>Browser Automation</strong> — подключение к Browser Tab. Агент делает скриншоты и тестирует UI</li>
        <li><strong>Show Localhost Links</strong> — автооткрытие localhost ссылок в браузерной вкладке Cursor</li>
        <li><strong>Installed MCP Servers</strong> — список подключённых серверов с toggle on/off</li>
        <li><strong>context7</strong> — актуальная документация библиотек (2 tools)</li>
        <li><strong>sqlite-mcp</strong> — прямой доступ к БД (10 tools, 3 prompts, 2 resources)</li>
        <li><strong>+ New MCP Server</strong> — добавить свой сервер одной кнопкой</li>
      </ul>
    </>
  )
}
