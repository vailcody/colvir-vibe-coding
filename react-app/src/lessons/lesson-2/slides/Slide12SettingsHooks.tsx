import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide12SettingsHooks({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Hooks</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}lesson-2/img/settings-hooks.jpg`} alt="Cursor Settings Hooks" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Configured Hooks (2)</strong> — sessionStart и afterFileEdit подключены</li>
          <li><strong>sessionStart</strong> → auto-commit.sh — коммитит изменения при старте нового чата</li>
          <li><strong>afterFileEdit</strong> → lint.sh — запускает линтер после каждой правки агента</li>
          <li><strong>Execution Log</strong> — полная история срабатываний хуков с таймингами</li>
          <li>afterFileEdit: 579-719ms — линтер успевает за полсекунды</li>
          <li>sessionStart: 85-279ms — коммит почти мгновенный</li>
          <li><strong>Open project config</strong> — прямой доступ к hooks.json для редактирования</li>
        </ul>
      </div>
    </>
  )
}
