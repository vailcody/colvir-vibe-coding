import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide16MCPTools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">15</span>
      <h2 className="reveal">MCP: Tools</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Функции, которые LLM может вызвать</p>
      <div className="code-block reveal" style={{ fontSize: '0.8rem' }}>
        <span className="comment">// Пример: tool для получения тест-кейса</span><br /><br />
        {'{'}<br />
        &nbsp;&nbsp;"name": "<strong>get_test_case</strong>",<br />
        &nbsp;&nbsp;"description": "Get test case by ID from database",<br />
        &nbsp;&nbsp;"inputSchema": {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"type": "object",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"properties": {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": {'{'} "type": "string", "description": "Test case ID" {'}'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"required": ["id"]<br />
        &nbsp;&nbsp;{'}'}<br />
        {'}'}
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '1rem' }}>
        <li><strong>Основная сущность</strong> — 90% MCP-серверов это tools</li>
        <li>LLM <strong>сама решает</strong> когда вызвать tool на основе описания</li>
        <li><strong>inputSchema</strong> = JSON Schema — описание параметров</li>
        <li>Аннотации: <code>readOnlyHint</code>, <code>destructiveHint</code> — маркировка опасности</li>
      </ul>
    </>
  )
}
