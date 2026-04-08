import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide16RulesPrompt({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">15</span>
      <h2 className="reveal">Промпт: создание rules</h2>
      <p className="subtitle reveal">Агент сам создаст правила по кодовой базе</p>
      <div className="code-block reveal">
        <p>// В чате Cursor (режим Agent)</p>
        <p>Проанализируй текущий проект и создай .cursor/rules/project.mdc с alwaysApply: true. Включи:</p>
        <p>- Стек (фреймворки, ORM, база данных)</p>
        <p>- Структуру проекта (где что лежит)</p>
        <p>- Команды для запуска и сборки</p>
        <p>- Стиль кода и конвенции</p>
        <p>Правило должно быть до 50 строк. Не копируй код — ссылайся на файлы-примеры.</p>
      </div>
    </>
  )
}
