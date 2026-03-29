import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide25CursorConnect({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">24</span>
      <h2 className="reveal">Подключаем к Cursor</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Remote-сервер через HTTP + Bearer-токен</p>
      <div className="code-block reveal" style={{ fontSize: '0.8rem' }}>
        <span className="comment">// .cursor/mcp.json</span><br /><br />
        {'{'}<br />
        &nbsp;&nbsp;"mcpServers": {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<strong>testgen</strong>": {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "http",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "http://127.0.0.1:3333/mcp",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"headers": {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Authorization": "Bearer app-1WaiItfwId..."<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
        &nbsp;&nbsp;{'}'}<br />
        {'}'}
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '1rem' }}>
        <li><code>type: "http"</code> — remote-сервер через Streamable HTTP</li>
        <li><code>headers</code> — API-ключ в заголовке Authorization</li>
        <li>Tools появляются в <strong>Settings → MCP</strong> — можно проверить</li>
      </ul>
    </>
  )
}
