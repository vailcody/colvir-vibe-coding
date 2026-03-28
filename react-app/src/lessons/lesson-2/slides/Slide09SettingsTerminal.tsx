import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide09SettingsTerminal({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Terminal &amp; Voice</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}lesson-2/img/settings-agents-terminal.jpg`} alt="Cursor Settings Terminal" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Toolbar on Selection</strong> — кнопки «Add to Chat» и «Quick Edit» при выделении кода</li>
          <li><strong>Themed Diff Backgrounds</strong> — цветные фоны для инлайн-диффов</li>
          <li><strong>Terminal Hint</strong> — подсказка ⌘K в терминале</li>
          <li><strong>Preview Box for Terminal ⌘K</strong> — превью вместо прямой вставки в shell</li>
          <li><strong>Collapse Auto-Run Commands</strong> — сворачивать вывод авто-команд по умолчанию</li>
          <li><strong>Voice Mode: Submit Keywords</strong> — кастомные слова для отправки голосового промпта. Вайб-кодинг голосом!</li>
        </ul>
      </div>
    </>
  )
}
