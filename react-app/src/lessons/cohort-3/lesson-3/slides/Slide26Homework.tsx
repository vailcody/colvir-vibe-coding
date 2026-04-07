import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide26Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">25</span>
      <h2 className="reveal">Домашнее задание</h2>
      <div className="steps stagger-list">
        <div className="step">
          <span className="step-number">01</span>
          <div>
            <span className="step-text">Дописать свой MCP-сервер</span>
            <p className="step-desc">Добавить минимум 3 tools под свою задачу или проект. Один read-only, один action, один search/list.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div>
            <span className="step-text">Подключить сервер к Cursor</span>
            <p className="step-desc">Проверить что tools реально видны и вызываются. Прислать скриншот или короткое видео результата.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <div>
            <span className="step-text">Сделать одну спека-задачу через OpenSpec</span>
            <p className="step-desc">proposal.md, design.md и tasks.md для любой фичи вашего проекта. Потом пройти apply вместе с агентом.</p>
          </div>
        </div>
      </div>
      <div className="reveal" style={{ marginTop: '1.5rem', background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '4px', padding: '1rem 1.25rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Бонус</h3>
        <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'var(--text-secondary)' }}>Если застрянешь, сначала перепиши требования в спеку, а не добивай проблему новыми промптами в длинном чате.</p>
      </div>
    </>
  )
}
