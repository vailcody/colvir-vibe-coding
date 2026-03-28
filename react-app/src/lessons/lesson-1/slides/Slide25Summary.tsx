import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide25Summary({}: SlideProps) {
  return (
    <>
      <div className="geo-square" style={{ position: 'absolute', width: 100, height: 100, top: '10%', right: '15%', opacity: 0.1, background: 'var(--accent)', zIndex: -1 }} />
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Итоги</h2>
      <ul className="content-list stagger-list">
        <li>Вайб-кодинг — это суперсила, не замена</li>
        <li>Начинайте с малого</li>
        <li>Telegram «Вайб-кодинг по Чуйкову»</li>
      </ul>
      <div className="big-text reveal">Вопросы?</div>
    </>
  )
}
