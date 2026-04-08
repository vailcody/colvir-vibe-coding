import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide17Ask({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">16</span>
      <h2 className="reveal">Режим: Ask</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Спроси перед тем как делать. Файлы не меняет.</p>
      <div className="code-block reveal">
        <span className="comment">{'// Промпт для исследования кодовой базы'}</span><br /><br />
        {'Проанализируй текущий проект и ответь:'}<br /><br />
        {'1. Какой стек используется?'}<br />
        {'2. Какая структура проекта (папки, ключевые файлы)?'}<br />
        {'3. Где данные замоканы, а где реальные?'}<br />
        {'4. Какие API endpoints есть и что они делают?'}<br />
        {'5. Какие зависимости установлены?'}<br />
        {'6. Есть ли тесты? Если да — какой фреймворк?'}<br /><br />
        <span className="comment">{'Формат: краткий обзор, потом детали по каждому пункту.'}</span>
      </div>
      <p className="subtitle reveal" style={{ marginTop: '1rem' }}>Первый шаг после открытия нового проекта в Cursor</p>
    </>
  )
}
