import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide26TokenSaving({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">25</span>
      <h2 className="reveal">Экономия токенов</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Как не сжечь бюджет за день</p>
      <ul className="content-list stagger-list">
        <li><strong>.cursorignore</strong> — исключи node_modules, .next, dist из индексации. Как .gitignore для Cursor</li>
        <li><strong>Новый чат после задачи</strong> — после 6-8 обменов история = 20-40K токенов. Чистый чат = чистый контекст</li>
        <li><strong>Запрет лишних файлов</strong> — rule: «не создавай SUMMARY, CHANGELOG». Каждый File Edit перечитывает весь контекст</li>
        <li><strong>Всё в первом сообщении</strong> — не размазывай контекст по 3 запросам. Один промпт с @file — дешевле</li>
        <li><strong>Rules до 50 строк</strong> — alwaysApply = токены в каждом промпте. Ссылайся на @файлы, не копируй код</li>
        <li><strong>Модель под задачу</strong> — Opus для архитектуры, Sonnet для кодинга, fast для рутины. Cmd+/</li>
        <li><strong>@folder &gt; 10× @file</strong> — обзор структуры дешевле, агент сам решит что читать</li>
      </ul>
    </>
  )
}
