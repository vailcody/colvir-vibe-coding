import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide16PhraseMCP({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', flexDirection: 'column' }}>
      <h2 className="phrase-text reveal">MCP</h2>
      <p className="subtitle reveal">Model Context Protocol</p>
    </div>
  )
}
