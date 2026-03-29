import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide09OpenSpec({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">OpenSpec</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Лёгкий, гибкий, работает с 20+ AI-агентами</p>
      <div className="flow-diagram reveal" style={{ marginBottom: '1.5rem' }}>
        <div className="flow-node highlighted" style={{ background: 'var(--accent)', color: '#fff' }}>propose</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">apply</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">verify</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">archive</div>
      </div>
      <div className="code-block reveal" style={{ fontSize: '0.8rem' }}>
        <span className="comment">// Установка</span><br />
        npm install -g @fission-ai/openspec<br /><br />
        <span className="comment">// Создаём спецификацию</span><br />
        <strong>/opsx:propose</strong> Создать MCP-сервер для управления тест-кейсами: добавление, получение, обновление и удаление тест-кейсов, поддержка тестовых наборов и параметризации.<br /><br />
        <span className="comment">// Результат: openspec/changes/mcp-test-cases/</span><br />
        ├── proposal.md&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← зачем</span><br />
        ├── specs/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← требования</span><br />
        ├── design.md&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← как</span><br />
        └── tasks.md&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← что делать</span>
      </div>
    </>
  )
}
