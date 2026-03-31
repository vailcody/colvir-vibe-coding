import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide24ContextPollution({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">24</span>
      <h2 className="reveal">Засорение контекста</h2>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>MCP = токены</h3>
          <p>GitHub MCP = 40 tools = 40K токенов в контексте ВСЕГДА. Даже если вы их не используете.</p>
        </div>
        <div className="card">
          <h3>Правило</h3>
          <p>Отключайте неиспользуемые MCP. Каждый файл в контексте = токены. Меньше шума — точнее ответ.</p>
        </div>
      </div>
      <blockquote className="quote reveal" style={{ marginTop: '1.5rem' }}>
        Не ставьте MCP «на всякий случай» — это дорого и вредно
      </blockquote>
    </>
  )
}
