import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide22Skills({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">21</span>
      <h2 className="reveal">Skills</h2>
      <p className="subtitle reveal">Переиспользуемые процедуры для агента</p>
      <h3 className="reveal">Что это</h3>
      <p className="reveal">Markdown-инструкции в <code>.cursor/skills/name/SKILL.md</code>. Пошаговые процедуры: «как делать X». В отличие от rules (что делать), skills — это как делать.</p>
      <h3 className="reveal">Когда загружается</h3>
      <p className="reveal">Агент видит name + description всех skills. Полный текст загружается когда релевантно или по <code>/skill-name</code>. Прогрессивно — не тратит контекст зря.</p>
      <h3 className="reveal">Создание</h3>
      <p className="reveal"><code>/create-skill</code> в чате — Cursor проведёт через формат. Или вручную: <code>mkdir .cursor/skills/my-skill</code> + SKILL.md</p>
    </>
  )
}
