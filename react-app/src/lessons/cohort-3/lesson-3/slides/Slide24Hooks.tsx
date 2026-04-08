import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide24Hooks({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">23</span>
      <h2 className="reveal">Hooks</h2>
      <p className="subtitle reveal">Автоматические скрипты на события агента</p>
      <h3 className="reveal">Что это</h3>
      <p className="reveal">Скрипты в <code>.cursor/hooks.json</code>, которые запускаются на события: после правки файла, перед командой, в начале сессии.</p>
      <h3 className="reveal">Ключевые события</h3>
      <p className="reveal"><strong>sessionStart</strong> — начало сессии. <strong>afterFileEdit</strong> — после правки файла. <strong>beforeShellExecution</strong> — перед командой. <strong>stop</strong> — завершение.</p>
      <h3 className="reveal">Пример: автокоммит</h3>
      <p className="reveal">sessionStart → <code>git add -A && git commit</code>. Каждый новый чат начинается с чистого checkpoint. Всегда можно откатиться.</p>
      <h3 className="reveal">Пример: автолинт</h3>
      <p className="reveal">afterFileEdit → <code>pnpm lint</code>. Агент видит ошибки линтера и сам исправляет. Код всегда компилируется.</p>
    </>
  )
}
