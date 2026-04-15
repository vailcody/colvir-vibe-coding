import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide17Summary({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">17</span>
      <h2 className="reveal">Что сегодня разобрали</h2>

      <ul className="content-list stagger-list">
        <li>Ручной деплой по FTP — не масштабируется. Нужны ветки и автодеплой</li>
        <li>Докер упаковывает приложение в образ — работает одинаково на любой машине</li>
        <li>Образ, контейнер, том — три базовые сущности Докера</li>
        <li>Через Докер можно запускать локальные модели и MCP-серверы</li>
        <li>Безопасность сервера: SSH-ключи, firewall, Warp Agent</li>
        <li>Dokploy — автодеплой из Git в Докер через веб-интерфейс</li>
      </ul>
    </>
  )
}