import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide21MCPSecurity({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">21</span>
      <h2 className="reveal">MCP: Безопасность</h2>
      <p className="subtitle reveal">53% серверов уязвимы (OWASP)</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Tool Poisoning</h3>
          <p>Подмена описания tool — скрытые инструкции в description. LLM доверяет и выполняет.</p>
        </div>
        <div className="card">
          <h3>Rug Pull</h3>
          <p>Сервер меняет поведение после одобрения. Ты доверял — а он теперь сливает данные.</p>
        </div>
        <div className="card">
          <h3>Command Injection</h3>
          <p>Shell-команда из пользовательского ввода. exec(`pytest $&#123;testName&#125;`) → rm -rf /</p>
        </div>
        <div className="card">
          <h3>Защита</h3>
          <p>Проверяй описания tools. Пиннинг версий. Используй доверенные источники. Не ставь «на всякий случай».</p>
        </div>
      </div>
    </>
  )
}
