import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide17Ask({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">16</span>
      <h2 className="reveal">Режим: Ask</h2>
      <p className="subtitle reveal">Спроси перед тем как делать. Файлы не меняет.</p>
      <div className="code-block reveal">
        <p>// Промпт для исследования кодовой базы</p>
        <p>Проанализируй текущий проект и ответь:</p>
        <p>1. Какой стек используется?</p>
        <p>2. Какая структура проекта (папки, ключевые файлы)?</p>
        <p>3. Где данные замоканы, а где реальные?</p>
        <p>4. Какие API endpoints есть и что они делают?</p>
        <p>5. Какие зависимости установлены?</p>
        <p>6. Есть ли тесты? Если да — какой фреймворк?</p>
        <p>Формат: краткий обзор, потом детали по каждому пункту.</p>
      </div>
      <p className="reveal" style={{ marginTop: '1.5rem' }}>Первый шаг после открытия нового проекта в Cursor</p>
    </>
  )
}
