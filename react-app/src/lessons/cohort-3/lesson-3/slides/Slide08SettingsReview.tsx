import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide08SettingsReview({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">07</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Review & Context</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-agents-review.jpg`} alt="Cursor Settings Review" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Agent Review on Commit</strong> — автоматическая проверка кода после коммита</li>
          <li><strong>Include Untracked Files</strong> — включить новые файлы в ревью</li>
          <li><strong>Web Search / Fetch</strong> — агент может искать в интернете</li>
          <li><strong>.cursorignore</strong> — исключения для индексации</li>
          <li><strong>Inline Diffs</strong> — изменения прямо в редакторе</li>
        </ul>
      </div>
    </>
  )
}
