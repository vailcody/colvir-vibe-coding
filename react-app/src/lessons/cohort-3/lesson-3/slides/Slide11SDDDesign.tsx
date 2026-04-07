import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide11SDDDesign({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">10</span>
      <h2 className="reveal">SDD: Design</h2>
      <p className="subtitle reveal" style={{ marginBottom: '0.5rem' }}>design.md — контекст, архитектурные решения, goals / non-goals</p>
      <img
        src={`${import.meta.env.BASE_URL}lesson-3-img/sdd-design.jpg`}
        alt="design.md — Context, Goals, Non-Goals"
        className="reveal"
        style={{ width: '100%', maxWidth: 1300, borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      />
    </>
  )
}
