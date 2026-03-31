import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide14Modes({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">4 режима работы</h2>
      <div className="mode-grid">
        <div className="mode-card reveal">
          <div className="mode-emoji">🔍</div>
          <h3>Ask</h3>
          <p>Исследуем проект, задаём вопросы. Собираем контекст перед работой.</p>
        </div>
        <div className="mode-card active-mode reveal">
          <div className="mode-emoji">📋</div>
          <h3>Plan</h3>
          <p>Составляем план с дорогой моделью. Проверяем перед выполнением.</p>
        </div>
        <div className="mode-card reveal">
          <div className="mode-emoji">🤖</div>
          <h3>Agent</h3>
          <p>Выполняем план с дешёвой моделью. Автоматическое внесение изменений.</p>
        </div>
        <div className="mode-card reveal">
          <div className="mode-emoji">🐛</div>
          <h3>Debug</h3>
          <p>Ищем и исправляем ошибки. Анализ логов и stack trace.</p>
        </div>
      </div>
    </>
  )
}
