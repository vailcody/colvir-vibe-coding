import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide23CommandInjection({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">22</span>
      <h2 className="reveal">Угроза: Command Injection</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Shell-команда из пользовательского ввода</p>
      <div className="code-block reveal" style={{ fontSize: '0.75rem' }}>
        <span className="comment">// ❌ Tool вставляет параметр в shell без санитизации:</span><br /><br />
        server.registerTool("run_test", ..., async ({'{'} testName {'}'}) =&gt; {'{'}<br />
        &nbsp;&nbsp;exec(`pytest tests/<strong>{'${testName}'}</strong>`);<br />
        {'}'});<br /><br />
        <span className="comment">// Пользователь (или LLM) передаёт:</span><br />
        testName: "<strong style={{ color: '#ff3300' }}>test_login; rm -rf /</strong>"<br /><br />
        <span className="comment">// Результат:</span><br />
        <strong style={{ color: '#ff3300' }}>pytest tests/test_login; rm -rf /</strong>
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '1rem' }}>
        <li><strong>Защита:</strong> всегда валидируй input через Zod-схему</li>
        <li>Не используй <code>exec()</code> с пользовательскими данными</li>
        <li>Аннотация <code>destructiveHint: true</code> для опасных tools</li>
      </ul>
    </>
  )
}
