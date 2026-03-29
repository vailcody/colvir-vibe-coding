import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide10SDDProposal({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">09</span>
      <h2 className="reveal">SDD: Proposal</h2>
      <p className="subtitle reveal" style={{ marginBottom: '0.5rem' }}>proposal.md — зачем делаем и что меняется</p>
      <img
        src={`${import.meta.env.BASE_URL}lesson-3-img/sdd-proposal.jpg`}
        alt="proposal.md — Why + What Changes"
        className="reveal"
        style={{ width: '100%', maxWidth: 1300, borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      />
    </>
  )
}
