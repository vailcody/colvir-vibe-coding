import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide09Meme({}: SlideProps) {
  return (
    <div className="slide-meme" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <div className="meme-container reveal">
        <img src={`${BASE}lesson-1/vibe-meme.jpg`} alt="Vibe coding is bad vs Vibe coding is the best" className="meme-img" />
      </div>
    </div>
  )
}
