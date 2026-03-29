import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide20MCPSecurity({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">19</span>
      <h2 className="reveal">MCP: Безопасность</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>OWASP уже выпустил MCP Top 10. 53% серверов уязвимы.</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>User Consent</h3>
          <p>Хост ОБЯЗАН спрашивать разрешение перед вызовом tool. <code>destructiveHint: true</code> → подтверждение. Аннотации — hints, не гарантии.</p>
        </div>
        <div className="card">
          <h3>API Keys → env vars</h3>
          <p>53% MCP-серверов хардкодят ключи (исследование Astrix). Правильно: <code>env</code> в mcp.json, <code>promptString</code> в VS Code.</p>
        </div>
        <div className="card">
          <h3>OAuth 2.1 + PKCE</h3>
          <p>Для remote-серверов. Authorization Code + PKCE обязательны. Добавлено в спеке v2 (март 2025).</p>
        </div>
        <div className="card">
          <h3>Топ угроз</h3>
          <p><strong>Tool Poisoning</strong> — подмена описания tool. <strong>Rug Pull</strong> — смена поведения после одобрения. <strong>Command Injection</strong> — shell из юзер-ввода.</p>
        </div>
      </div>
    </>
  )
}
