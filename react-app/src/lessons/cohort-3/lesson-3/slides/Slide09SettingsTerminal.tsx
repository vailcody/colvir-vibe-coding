import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide09SettingsTerminal({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Terminal & Voice</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-agents-terminal.jpg`} alt="Cursor Settings Terminal" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Toolbar on Selection</strong> — кнопки «Add to Chat» и «Quick Edit»</li>
          <li><strong>Themed Diff Backgrounds</strong> — цветные фоны для инлайн-диффов</li>
          <li><strong>Terminal Hint</strong> — подсказка ⌘K в терминале</li>
          <li><strong>Preview Box</strong> — превью вместо прямой вставки в shell</li>
          <li><strong>Voice Mode</strong> — вайб-кодинг голосом!</li>
        </ul>
      </div>
    </>
  )
}
