import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide11SimplEnd({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', height: '100%' }}>
      <h2 className="phrase-text reveal" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>Но простота<br />быстро закончилась</h2>
    </div>
  )
}
