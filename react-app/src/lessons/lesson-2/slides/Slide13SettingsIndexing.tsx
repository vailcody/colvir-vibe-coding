import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide13SettingsIndexing({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">12</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Indexing &amp; Docs</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}lesson-2/img/settings-indexing-docs.jpg`} alt="Cursor Settings Indexing Docs" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Codebase Indexing: 100%</strong> — 107 файлов проиндексировано. Embeddings в облаке, код — локально</li>
          <li><strong>Sync / Delete Index</strong> — принудительная переиндексация или сброс</li>
          <li><strong>Index New Folders</strong> — автоиндексация новых папок (до 50K файлов)</li>
          <li><strong>.cursorignore</strong> — Edit: исключения поверх .gitignore. Экономит токены!</li>
          <li><strong>Instant Grep (Beta)</strong> — индексация для быстрого поиска. Данные хранятся локально</li>
          <li><strong>Docs</strong> — подключённая документация: gotd, Dify. Используется через @Docs в чате</li>
          <li><strong>+ Add Doc</strong> — добавить URL документации для индексации</li>
        </ul>
      </div>
    </>
  )
}
