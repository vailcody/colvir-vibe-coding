import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide15Rules({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Первый шаг: Rules</h2>
      <p className="reveal">Прежде чем что-то делать — настрой правила проекта</p>
      <h3 className="reveal">Что включить</h3>
      <p className="reveal">Стек (фреймворки, ORM, DB). Структура проекта. Ключевые команды (dev, build, lint). Стиль кода (TypeScript strict, async/await).</p>
      <h3 className="reveal">Чего НЕ включать</h3>
      <p className="reveal">Общие советы по программированию. Длинные style guides (для этого есть линтер). Вещи которые AI и так знает (npm, git).</p>
      <h3 className="reveal">Best Practices</h3>
      <p className="reveal">До 50 строк. Ссылайтесь на файлы (<code>@src/routes/users.ts</code>) вместо копирования кода. Создание: <code>/create-rule</code></p>
      <h3 className="reveal">4 типа</h3>
      <p className="reveal"><strong>Always Apply</strong> — всегда. <strong>Globs</strong> — по маске файла. <strong>Agent-decided</strong> — AI решает. <strong>Manual</strong> — по @упоминанию.</p>
    </>
  )
}
