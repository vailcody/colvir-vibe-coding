import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide11DockerAI({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">12</span>
      <h2 className="reveal">Docker для локальных моделей и MCP</h2>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Локальные модели</h3>
          <p>Через Docker можно запускать локальные модели на своём компьютере. Данные остаются у тебя.</p>
        </div>
        <div className="card">
          <h3>MCP-серверы</h3>
          <p>MCP-серверы тоже удобно поднимать через Docker, чтобы быстро запускать и не ловить конфликты окружения.</p>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p>Один и тот же способ подходит и для приложений, и для локальных моделей, и для MCP-серверов.</p>
      </div>
    </>
  )
}