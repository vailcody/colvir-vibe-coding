import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide25PhraseSDD({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', flexDirection: 'column' }}>
      <span className="reveal" style={{ background: 'var(--accent)', color: '#000', padding: '0.25rem 0.75rem', borderRadius: 6, fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>БОНУС</span>
      <h2 className="phrase-text reveal">SDD</h2>
      <p className="subtitle reveal">Spec-Driven Development</p>
    </div>
  )
}
