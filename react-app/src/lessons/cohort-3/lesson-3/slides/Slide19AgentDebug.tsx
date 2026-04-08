import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide19AgentDebug({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">18</span>
      <h2 className="reveal">Режимы: Agent & Debug</h2>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Agent</h3>
          <p>Автономный режим. Читает файлы, пишет код, запускает команды в терминале. Основной режим для вайб-кодинга.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Checkpoints: Cursor сохраняет снимок перед каждым изменением. Всегда можно откатиться.</p>
        </div>
        <div className="card">
          <h3>Debug</h3>
          <p>Анализ ошибок. Вставляешь ошибку или стектрейс — агент находит root cause и предлагает fix.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Лайфхак: если ошибок нет при демо — сломай env-переменную, покажи как Debug починит.</p>
        </div>
      </div>
    </>
  )
}
