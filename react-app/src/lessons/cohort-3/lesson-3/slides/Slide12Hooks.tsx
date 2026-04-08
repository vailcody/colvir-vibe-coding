import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide12Hooks({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Hooks</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-hooks.jpg`} alt="Cursor Settings Hooks" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>sessionStart</strong> → auto-commit.sh — коммитит при старте чата</li>
          <li><strong>afterFileEdit</strong> → lint.sh — запускает линтер</li>
          <li><strong>Execution Log</strong> — история срабатываний с таймингами</li>
          <li>afterFileEdit: 579-719ms</li>
          <li>sessionStart: 85-279ms</li>
        </ul>
      </div>
    </>
  )
}
