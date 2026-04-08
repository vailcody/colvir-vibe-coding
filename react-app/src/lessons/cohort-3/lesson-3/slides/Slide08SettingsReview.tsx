import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08SettingsReview({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">07</span>
      <h2 className="reveal">Настройки: Review & Context</h2>
      <ul className="content-list stagger-list">
        <li><strong>Agent Review on Commit</strong> — автоматически проверяет код после каждого коммита. Встроенный code review!</li>
        <li><strong>Include Untracked Files</strong> — включить новые файлы в ревью (ещё не в git)</li>
        <li><strong>Web Search Tool</strong> — агент может искать в интернете</li>
        <li><strong>Web Fetch Tool</strong> — агент может загружать контент по URL</li>
        <li><strong>.cursorignore</strong> — Hierarchical Cursor Ignore: применяется к вложенным папкам</li>
        <li><strong>Inline Diffs</strong> — показывать изменения прямо в редакторе, а не в отдельной панели</li>
        <li><strong>Auto Format on Agent Finish</strong> — автоформатирование после завершения агента</li>
      </ul>
    </>
  )
}
