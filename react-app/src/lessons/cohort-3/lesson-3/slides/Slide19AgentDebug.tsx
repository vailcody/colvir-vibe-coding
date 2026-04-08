import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide19AgentDebug({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">18</span>
      <h2 className="reveal">Режимы: Agent & Debug</h2>
      <h3 className="reveal">Agent</h3>
      <p className="reveal">Автономный режим. Читает файлы, пишет код, запускает команды в терминале. Основной режим для вайб-кодинга.</p>
      <p className="reveal">Checkpoints: Cursor сохраняет снимок перед каждым изменением. Всегда можно откатиться.</p>
      <h3 className="reveal">Debug</h3>
      <p className="reveal">Анализ ошибок. Вставляешь ошибку или стектрейс — агент находит root cause и предлагает fix.</p>
      <p className="reveal">Лайфхак: если ошибок нет при демо — сломай env-переменную, покажи как Debug починит.</p>
    </>
  )
}
