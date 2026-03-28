import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide16RulesPrompt({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">15</span>
      <h2 className="reveal">Промпт: создание rules</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Агент сам создаст правила по кодовой базе</p>
      <div className="code-block reveal">
        <span className="comment">{'// В чате Cursor (режим Agent)'}</span><br /><br />
        {'Проанализируй текущий проект и создай'}<br />
        {'.cursor/rules/project.mdc с alwaysApply: true.'}<br /><br />
        {'Включи:'}<br />
        {'- Стек (фреймворки, ORM, база данных)'}<br />
        {'- Структуру проекта (где что лежит)'}<br />
        {'- Команды для запуска и сборки'}<br />
        {'- Стиль кода и конвенции'}<br /><br />
        {'Правило должно быть до 50 строк.'}<br />
        {'Не копируй код — ссылайся на файлы-примеры.'}
      </div>
    </>
  )
}
