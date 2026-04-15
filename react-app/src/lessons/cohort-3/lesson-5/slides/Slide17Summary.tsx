import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide17Summary({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">18</span>
      <h2 className="reveal">Что сегодня разобрали</h2>

      <ul className="content-list stagger-list">
        <li>Ручной деплой по FTP не масштабируется, нужны ветки и автодеплой</li>
        <li>Docker упаковывает приложение в образ и даёт одинаковый запуск на любой машине</li>
        <li>Образ, контейнер и том, три базовые сущности Docker</li>
        <li>Через Docker можно запускать локальные модели и MCP-серверы</li>
        <li>Безопасность сервера, SSH-ключи, firewall, отдельный пользователь, отключение root и паролей</li>
        <li>Dokploy ставится быстро, а настройку деплоя подробно разберём дальше</li>
      </ul>
    </>
  )
}