import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide13Indexing({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">12</span>
      <h2 className="reveal">Настройки: Indexing & Docs</h2>
      <img src={`${BASE}cohort-3/lesson-3/img/settings-indexing-docs.jpg`} alt="Cursor Settings Indexing Docs" className="settings-img" />
      <ul className="content-list stagger-list">
        <li><strong>Codebase Indexing: 100%</strong> — 107 файлов проиндексировано. Embeddings в облаке, код — локально</li>
        <li><strong>Sync / Delete Index</strong> — принудительная переиндексация или сброс</li>
        <li><strong>Index New Folders</strong> — автоиндексация новых папок (до 50K файлов)</li>
        <li><strong>.cursorignore</strong> — Edit: исключения поверх .gitignore. Экономит токены!</li>
        <li><strong>Instant Grep (Beta)</strong> — индексация для быстрого поиска. Данные хранятся локально</li>
        <li><strong>Docs</strong> — подключённая документация. Используется через @Docs в чате</li>
        <li><strong>+ Add Doc</strong> — добавить URL документации для индексации</li>
      </ul>
    </>
  )
}
