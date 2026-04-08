import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide09SettingsTerminal({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Настройки: Terminal & Voice</h2>
      <ul className="content-list stagger-list">
        <li><strong>Toolbar on Selection</strong> — кнопки «Add to Chat» и «Quick Edit» при выделении кода</li>
        <li><strong>Themed Diff Backgrounds</strong> — цветные фоны для инлайн-диффов</li>
        <li><strong>Terminal Hint</strong> — подсказка ⌘K в терминале</li>
        <li><strong>Preview Box for Terminal ⌘K</strong> — превью вместо прямой вставки в shell</li>
        <li><strong>Collapse Auto-Run Commands</strong> — сворачивать вывод авто-команд по умолчанию</li>
        <li><strong>Voice Mode: Submit Keywords</strong> — кастомные слова для отправки голосового промпта. Вайб-кодинг голосом!</li>
      </ul>
    </>
  )
}
