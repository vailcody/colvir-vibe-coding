import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide22Skills({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">22</span>
      <h2 className="reveal">Skills</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Переиспользуемые процедуры для агента</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Что это</h3>
          <p>Markdown-инструкции в <code>.cursor/skills/name/SKILL.md</code>. Пошаговые процедуры: «как делать X». В отличие от rules (что делать), skills — это как делать.</p>
        </div>
        <div className="card">
          <h3>Когда загружается</h3>
          <p>Агент видит name + description всех skills. Полный текст загружается когда релевантно или по <code>/skill-name</code>. Прогрессивно — не тратит контекст зря.</p>
        </div>
        <div className="card">
          <h3>Что внутри</h3>
          <p>YAML frontmatter (name, description) + markdown. Может включать scripts/, references/, assets/ — загружаются по требованию.</p>
        </div>
        <div className="card">
          <h3>Создание</h3>
          <p><code>/create-skill</code> в чате — Cursor проведёт через формат. Или вручную: <code>mkdir .cursor/skills/my-skill</code> + SKILL.md</p>
        </div>
      </div>
    </>
  )
}
