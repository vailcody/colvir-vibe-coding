import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide17MCPResources({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">16</span>
      <h2 className="reveal">MCP: Resources</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Read-only данные для контекста агента</p>
      <div className="code-block reveal" style={{ fontSize: '0.68rem' }}>
        server.<strong>registerResource</strong>(<br />
        &nbsp;&nbsp;'server-status',<br />
        &nbsp;&nbsp;'status://server',<br />
        &nbsp;&nbsp;{'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;title: 'Server Status',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;description: 'Current server status and uptime',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;mimeType: 'application/json'<br />
        &nbsp;&nbsp;{'}'},<br />
        &nbsp;&nbsp;async (uri) =&gt; ({'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;contents: [{'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uri: uri.href,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: JSON.stringify({'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status: 'running',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uptime: process.uptime(),<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nodeVersion: process.version,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memoryMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}, null, 2)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'}]<br />
        &nbsp;&nbsp;{'}'}){')'};
      </div>
      <div className="card-grid" style={{ marginTop: '0.8rem' }}>
        <div className="card highlighted">
          <h3>URI ≠ адрес</h3>
          <p>Как REST endpoint <code>/api/users</code> — клиенту неважно, что внутри. Сервер сам решает где взять данные.</p>
        </div>
        <div className="card">
          <h3>Resources vs Tools</h3>
          <p>Resources = read-only контекст. Tools = действия (создать, удалить, изменить).</p>
        </div>
      </div>
    </>
  )
}
