import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide03Recap({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">Где мы остановились</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Занятие 2: Cursor настройки и режимы</p>
      <div className="card-grid">
        <div className="card">
          <h3>Settings</h3>
          <p>Настроили Cursor под проект: модели, agents, rules, hooks, indexing</p>
        </div>
        <div className="card">
          <h3>Режимы</h3>
          <p>Ask → Plan → Agent → Debug. Золотой workflow.</p>
        </div>
        <div className="card">
          <h3>Контекст</h3>
          <p>Как работает контекстное окно, что загружается и когда</p>
        </div>
        <div className="card highlighted">
          <h3>MCP (обзор)</h3>
          <p>Узнали что такое MCP. Сегодня — погружаемся глубже и создаём свой.</p>
        </div>
      </div>
    </>
  )
}
