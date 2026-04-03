import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide14Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Домашнее задание</h2>
      <div className="steps stagger-list" style={{ fontSize: '1.25rem' }}>
        <div className="step"><span className="step-number">1</span><span className="step-text"><strong>Установи Expo Go</strong> на свой телефон (App Store / Google Play)</span></div>
        <div className="step"><span className="step-number">2</span><span className="step-text"><strong>Сделай прототип</strong> приложения голосовых заметок в Rork с имитацией транскрибации</span></div>
        <div className="step"><span className="step-number">3</span><span className="step-text"><strong>Запусти на телефоне</strong> через QR-код в Expo Go — увидишь своё приложение вживую</span></div>
        <div className="step"><span className="step-number">4</span><span className="step-text"><strong>Скинь скриншот в чат</strong> — разберём результаты вместе</span></div>
      </div>
      <div className="reveal" style={{ marginTop: '1.5rem', background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '4px', padding: '1rem 1.25rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Следующее занятие ⭐</h3>
        <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'var(--text-secondary)' }}>Публикация мобильного приложения в App Store и Google Play — что нужно подготовить, подводные камни, Expo EAS Build</p>
      </div>
    </>
  )
}
