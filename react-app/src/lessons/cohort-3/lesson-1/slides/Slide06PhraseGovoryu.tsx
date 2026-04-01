import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide06PhraseGovoryu({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', height: '100%' }}>
      <h2 className="phrase-text reveal">Говорю что-то</h2>
    </div>
  )
}
