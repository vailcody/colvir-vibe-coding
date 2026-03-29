import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide18MCPPrompts({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">17</span>
      <h2 className="reveal">MCP: Prompts</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Готовые шаблоны запросов от сервера</p>
      <div className="code-block reveal" style={{ fontSize: '0.8rem' }}>
        <span className="comment">// Пример: промпт-шаблон</span><br /><br />
        {'{'}<br />
        &nbsp;&nbsp;"name": "<strong>delete_test_case</strong>",<br />
        &nbsp;&nbsp;"description": "Delete a test case by its ID",<br />
        &nbsp;&nbsp;"arguments": [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'{'} "name": "testCaseId", "description": "ID of test case to delete", "required": true {'}'}<br />
        &nbsp;&nbsp;]<br />
        {'}'}
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '1rem' }}>
        <li>Предготовленные промпты, которые <strong>пользователь выбирает</strong> (не LLM)</li>
        <li>Как slash-команды: <code>/delete_test_case testCaseId="TC-001"</code></li>
        <li>Менее популярны, чем tools — но полезны для стандартных сценариев</li>
      </ul>
    </>
  )
}
