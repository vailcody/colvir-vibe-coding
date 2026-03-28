import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide10SettingsRules({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">09</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Rules, Skills, Subagents</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}lesson-2/img/settings-rules-skills.jpg`} alt="Cursor Settings Rules Skills Subagents" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Rules</strong> — все правила проекта. Видно текст каждого rule. Кнопка «+ New» для создания</li>
          <li><strong>AGENTS</strong> — AGENTS.md файл как альтернатива .cursor/rules</li>
          <li><strong>Skills</strong> — «Agent Decides» — агент сам решает когда применить. Видны description'ы. Здесь наши unit-tests и dify-workflow-api</li>
          <li><strong>Subagents</strong> — кастомные субагенты. Наш security-auditor виден здесь</li>
          <li><strong>Commands</strong> — переиспользуемые команды через / в чате</li>
          <li><strong>Include third-party Plugins</strong> — автоимпорт конфигов из других инструментов (Claude, Codex)</li>
        </ul>
      </div>
    </>
  )
}
