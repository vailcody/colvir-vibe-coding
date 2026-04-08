import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide23Subagents({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">22</span>
      <h2 className="reveal">Субагенты</h2>
      <p className="subtitle reveal">Параллельные агенты со своим контекстом</p>
      <h3 className="reveal">Зачем</h3>
      <p className="reveal">Контекстная изоляция: шумный вывод остаётся в субагенте. Параллельность: несколько задач одновременно. Специализация: свой промпт и модель.</p>
      <h3 className="reveal">3 встроенных</h3>
      <p className="reveal"><strong>Explore</strong> — поиск по коду (быстрая модель, параллельно). <strong>Bash</strong> — цепочки shell-команд. <strong>Browser</strong> — скриншоты и тесты UI.</p>
      <h3 className="reveal">Кастомные</h3>
      <p className="reveal"><code>.cursor/agents/verifier.md</code> — YAML frontmatter (name, description, model, readonly) + промпт. Вызов: <code>/verifier проверь auth</code></p>
    </>
  )
}
