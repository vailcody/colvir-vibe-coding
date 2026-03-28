import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide11SettingsTools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">10</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Tools &amp; MCP</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}lesson-2/img/settings-tools-mcp.jpg`} alt="Cursor Settings Tools MCP" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Browser Automation</strong> — подключение к Browser Tab. Агент делает скриншоты и тестирует UI</li>
          <li><strong>Show Localhost Links</strong> — автооткрытие localhost ссылок в браузерной вкладке Cursor</li>
          <li><strong>Installed MCP Servers</strong> — список подключённых серверов с toggle on/off</li>
          <li><strong>context7</strong> — актуальная документация библиотек (2 tools)</li>
          <li><strong>firecrawl</strong> — скрейпинг веб-страниц (12 tools)</li>
          <li><strong>sqlite-mcp</strong> — прямой доступ к БД (10 tools, 3 prompts, 2 resources)</li>
          <li><strong>postgres-mcp</strong> — отключён, включается по необходимости</li>
          <li><strong>+ New MCP Server</strong> — добавить свой сервер одной кнопкой</li>
        </ul>
      </div>
    </>
  )
}
