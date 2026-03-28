import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide25Hooks({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">24</span>
      <h2 className="reveal">Hooks</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Автоматические скрипты на события агента</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Что это</h3>
          <p>Скрипты в <code>.cursor/hooks.json</code>, которые запускаются на события: после правки файла, перед командой, в начале сессии.</p>
        </div>
        <div className="card">
          <h3>Ключевые события</h3>
          <p><strong>sessionStart</strong> — начало сессии. <strong>afterFileEdit</strong> — после правки файла. <strong>beforeShellExecution</strong> — перед командой. <strong>stop</strong> — завершение.</p>
        </div>
        <div className="card">
          <h3>Пример: автокоммит</h3>
          <p>sessionStart → <code>git add -A && git commit</code>. Каждый новый чат начинается с чистого checkpoint. Всегда можно откатиться.</p>
        </div>
        <div className="card">
          <h3>Пример: автолинт</h3>
          <p>afterFileEdit → <code>pnpm lint</code>. Агент видит ошибки линтера и сам исправляет. Код всегда компилируется.</p>
        </div>
      </div>
    </>
  )
}
