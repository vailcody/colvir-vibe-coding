import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide23Subagents({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">23</span>
      <h2 className="reveal">Субагенты</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Параллельные агенты со своим контекстом</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Зачем</h3>
          <p>Контекстная изоляция: шумный вывод остаётся в субагенте. Параллельность: несколько задач одновременно. Специализация: свой промпт и модель.</p>
        </div>
        <div className="card">
          <h3>3 встроенных</h3>
          <p><strong>Explore</strong> — поиск по коду (быстрая модель, параллельно). <strong>Bash</strong> — цепочки shell-команд. <strong>Browser</strong> — скриншоты и тесты UI.</p>
        </div>
        <div className="card">
          <h3>Кастомные</h3>
          <p><code>.cursor/agents/verifier.md</code> — YAML frontmatter (name, description, model, readonly) + промпт. Вызов: <code>/verifier проверь auth</code></p>
        </div>
        <div className="card">
          <h3>Модели</h3>
          <p><code>inherit</code> — как родитель. <code>fast</code> — быстрая/дешёвая. Конкретная модель по ID. <code>readonly: true</code> — только анализ.</p>
        </div>
      </div>
      <p className="subtitle reveal" style={{ marginTop: '1rem' }}>Создание: <code>/create-subagent</code> прямо в чате Cursor</p>
    </>
  )
}
