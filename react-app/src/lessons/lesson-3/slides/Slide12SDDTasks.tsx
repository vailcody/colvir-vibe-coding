import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide12SDDTasks({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal">SDD: Tasks</h2>
      <p className="subtitle reveal" style={{ marginBottom: '0.5rem' }}>tasks.md — чеклист для агента, фазы реализации</p>
      <img
        src={`${import.meta.env.BASE_URL}lesson-3-img/sdd-tasks.jpg`}
        alt="tasks.md — Implementation checklist"
        className="reveal"
        style={{ width: '100%', maxWidth: 1300, borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      />
    </>
  )
}
