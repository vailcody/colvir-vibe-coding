import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide15MCPArchitecture({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Архитектура MCP</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Host → Client → Server</p>
      <img
        src={`${import.meta.env.BASE_URL}lesson-3-img/mcp-architecture.png`}
        alt="MCP Architecture: Host → Client → Server"
        className="reveal"
        style={{ width: '100%', maxWidth: 1300, borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      />
    </>
  )
}
