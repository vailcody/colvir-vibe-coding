import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide19MCPTransport({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">18</span>
      <h2 className="reveal">MCP: Транспорт</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Как клиент и сервер общаются</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>stdio</h3>
          <p>Хост запускает сервер как процесс. Общение через stdin/stdout. Основной способ для Cursor и Claude Desktop.</p>
        </div>
        <div className="card">
          <h3>Streamable HTTP</h3>
          <p>HTTP POST для запросов, SSE для уведомлений. Для удалённых серверов и веб-деплоя.</p>
        </div>
      </div>
      <div className="code-block reveal" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
        <span className="comment">// JSON-RPC 2.0 — формат сообщений</span><br /><br />
        → {'{'} "jsonrpc": "2.0", "id": 1, "method": "<strong>tools/call</strong>",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"params": {'{'} "name": "get_test_case", "arguments": {'{'} "id": "TC-001" {'}'} {'}'} {'}'}<br /><br />
        ← {'{'} "jsonrpc": "2.0", "id": 1, "result": {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"content": [{'{'} "type": "text", "text": "Test case TC-001: Login flow..." {'}'}] {'}'} {'}'}
      </div>
    </>
  )
}
