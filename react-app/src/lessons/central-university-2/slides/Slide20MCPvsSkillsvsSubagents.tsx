import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide20MCPvsSkillsvsSubagents({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">20</span>
      <h2 className="reveal">MCP vs Skills vs Субагенты</h2>
      <p className="subtitle reveal">Три способа расширить возможности агента</p>
      <div className="card-row">
        <div className="card highlighted">
          <h3>MCP</h3>
          <p>Протокол для подключения к внешним инструментам. Как API, но для AI-моделей. Figma, PostgreSQL, браузер.</p>
        </div>
        <div className="card">
          <h3>Skills</h3>
          <p>Инструкции + скрипты. Markdown-файлы с пошаговыми процедурами. КАК делать конкретную задачу.</p>
        </div>
        <div className="card">
          <h3>Субагенты</h3>
          <p>Параллельные агенты со своим контекстом. Изоляция шума, специализация, свои модели.</p>
        </div>
      </div>
    </>
  )
}
