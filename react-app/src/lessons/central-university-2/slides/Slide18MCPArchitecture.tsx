import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide18MCPArchitecture({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">18</span>
      <h2 className="reveal">Архитектура MCP</h2>
      <p className="subtitle reveal">Host → Client → Server</p>
      <img
        src={`${import.meta.env.BASE_URL}central-university-2/mcp-architecture.png`}
        alt="MCP Architecture"
        className="reveal"
        style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', borderRadius: 12, marginTop: '1rem' }}
      />
    </>
  )
}
