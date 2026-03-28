import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide15RulesFirst({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Первый шаг: Rules</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Прежде чем что-то делать — настрой правила проекта</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Что включить</h3>
          <p>Стек (фреймворки, ORM, DB). Структура проекта. Ключевые команды (dev, build, lint). Стиль кода (TypeScript strict, async/await).</p>
        </div>
        <div className="card">
          <h3>Чего НЕ включать</h3>
          <p>Общие советы по программированию. Длинные style guides (для этого есть линтер). Вещи которые AI и так знает (npm, git).</p>
        </div>
        <div className="card">
          <h3>Best Practices</h3>
          <p>До 50 строк. Ссылайтесь на файлы (<code>@src/routes/users.ts</code>) вместо копирования кода. Создание: <code>/create-rule</code></p>
        </div>
        <div className="card">
          <h3>4 типа</h3>
          <p><strong>Always Apply</strong> — всегда. <strong>Globs</strong> — по маске файла. <strong>Agent-decided</strong> — AI решает. <strong>Manual</strong> — по @упоминанию.</p>
        </div>
      </div>
    </>
  )
}
