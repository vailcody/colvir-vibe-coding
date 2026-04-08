import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide10RulesSkills({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">09</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Rules, Skills, Subagents</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-rules-skills.jpg`} alt="Cursor Settings Rules Skills" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Rules</strong> — правила проекта. Кнопка «+ New» для создания</li>
          <li><strong>AGENTS</strong> — AGENTS.md как альтернатива .cursor/rules</li>
          <li><strong>Skills</strong> — «Agent Decides» — агент сам решает когда применить</li>
          <li><strong>Subagents</strong> — кастомные агенты</li>
          <li><strong>Commands</strong> — переиспользуемые команды через /</li>
        </ul>
      </div>
    </>
  )
}
