import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide04Tweet({}: SlideProps) {
  return (
    <div className="slide-tweet" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div className="geo-line" style={{ position: 'absolute', width: 3, height: 150, bottom: '10%', right: '12%', background: 'var(--text-primary)', zIndex: -1 }} />
      <div className="geo-square" style={{ position: 'absolute', width: 40, height: 40, bottom: '8%', right: '10%', opacity: 0.2, background: 'var(--accent)', zIndex: -1 }} />
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">Что такое вайб-кодинг?</h2>
      <div className="tweet-container reveal">
        <img src={`${BASE}lesson-1/karpathy-tweet.jpg`} alt="Andrej Karpathy tweet about vibe coding" className="tweet-img" />
      </div>
    </div>
  )
}
