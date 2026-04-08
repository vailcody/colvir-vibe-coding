import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide11MCPTools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">10</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Tools & MCP</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-tools-mcp.jpg`} alt="Cursor Settings Tools MCP" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Browser Automation</strong> — агент делает скриншоты и тестирует UI</li>
          <li><strong>Show Localhost Links</strong> — автооткрытие localhost в браузере Cursor</li>
          <li><strong>Installed MCP Servers</strong> — список подключённых серверов</li>
          <li><strong>context7</strong> — актуальная документация библиотек</li>
          <li><strong>sqlite-mcp</strong> — прямой доступ к БД</li>
        </ul>
      </div>
    </>
  )
}
