import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide05Rules({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Шаг 1: Rules</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Промпт для генерации правил MCP-сервера</p>
      <div className="code-block reveal" style={{ fontSize: '0.65rem' }}>
        <span className="comment">// Промпт для Cursor → генерирует .cursor/rules/mcp-server.mdc</span><br /><br />
        Сгенерируй правила разработки для кастомного MCP-сервера<br />
        (домен: генерация и тест-кейсы, вызовы к бэкенду).<br /><br />
        <strong>1) Архитектура</strong><br />
        - MCP — тонкая обёртка над HTTP API: все операции через<br />
        &nbsp;&nbsp;HTTP-запросы к бэкенду (REST/JSON).<br />
        - Запретить в слое MCP: прямое подключение к БД, SQL.<br />
        - Бизнес-логика и проверки прав — на стороне API;<br />
        &nbsp;&nbsp;MCP лишь маппит инструменты на вызовы API.<br /><br />
        <strong>2) Конфигурация и аутентификация</strong><br />
        - Пользователь указывает: URL сервера MCP + MCP_API_KEY.<br /><br />
        <strong>3) Транспорт</strong><br />
        - Только HTTP (Streamable HTTP по спецификации MCP).<br /><br />
        <strong>4) Реализация протокола</strong><br />
        - Использовать официальный @modelcontextprotocol/sdk.<br />
        - Не делать самописную реализацию MCP.
      </div>
    </>
  )
}
