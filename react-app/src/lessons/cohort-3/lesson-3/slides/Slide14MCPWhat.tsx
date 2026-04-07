import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide14MCPWhat({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">13</span>
      <h2 className="reveal">MCP: Model Context Protocol</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Открытый протокол для подключения AI-агентов к данным и инструментам</p>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <img
          src={`${import.meta.env.BASE_URL}lesson-3-img/futurama-head.jpg`}
          alt=""
          className="reveal"
          style={{ height: '55vh', borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.15)', flexShrink: 0, objectFit: 'cover' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card highlighted">
            <h3>Что это</h3>
            <p>API-эндпоинты для AI: описываешь tool, агент сам вызывает. Один протокол вместо кастомных интеграций.</p>
          </div>
          <div className="card">
            <h3>Кто использует</h3>
            <p>Cursor, Claude Desktop, VS Code Copilot, Windsurf, Zed, Claude Code — все поддерживают MCP.</p>
          </div>
        </div>
      </div>
    </>
  )
}
