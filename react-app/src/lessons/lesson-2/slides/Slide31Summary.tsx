import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide31Summary({}: SlideProps) {
  return (
    <>
      <div className="geo-square" style={{ width: 100, height: 100, top: '10%', right: '15%', opacity: 0.1 }} />
      <span className="slide-number reveal">30</span>
      <h2 className="reveal">Итоги</h2>
      <ul className="content-list stagger-list">
        <li>Прототип ожил — от имитации к рабочему приложению</li>
        <li>Cursor — ваш главный инструмент вайб-кодинга</li>
        <li>Контекст, правила, MCP — три кита эффективности</li>
        <li>Telegram «Вайб-кодинг по Чуйкову»</li>
      </ul>
      <div className="big-text reveal">Вопросы?</div>
    </>
  )
}
