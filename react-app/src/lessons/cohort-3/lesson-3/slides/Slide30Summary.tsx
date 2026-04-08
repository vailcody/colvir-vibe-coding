import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide30Summary({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">29</span>
      <h2 className="reveal">Итоги</h2>
      <ul className="content-list stagger-list">
        <li>Прототип ожил — от имитации к рабочему приложению</li>
        <li>Cursor — ваш главный инструмент вайб-кодинга</li>
        <li>Контекст, правила, MCP — три кита эффективности</li>
      </ul>
      <p className="reveal" style={{ marginTop: '2rem', fontFamily: 'var(--font-body)', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}>Вопросы?</p>
    </>
  )
}
