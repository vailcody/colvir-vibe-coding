import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide13Indexing({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">12</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Indexing & Docs</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-indexing-docs.jpg`} alt="Cursor Settings Indexing Docs" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Codebase Indexing: 100%</strong> — 107 файлов проиндексировано</li>
          <li><strong>Sync / Delete Index</strong> — принудительная переиндексация</li>
          <li><strong>.cursorignore</strong> — исключения поверх .gitignore</li>
          <li><strong>Instant Grep (Beta)</strong> — быстрый поиск по коду</li>
          <li><strong>Docs</strong> — подключённая документация через @Docs</li>
        </ul>
      </div>
    </>
  )
}
