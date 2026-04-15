import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide14ServerSecurity({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Безопасность сервера</h2>

      <div className="card-grid reveal">
        <div className="card">
          <h3>SSH-ключи вместо паролей</h3>
          <p>Пара ключей: приватный на компьютере, публичный на сервере. Парольную авторизацию отключаем.</p>
        </div>
        <div className="card">
          <h3>Firewall</h3>
          <p>Открыты только нужные порты: 22 (SSH), 80 (HTTP), 443 (HTTPS). Всё остальное закрыто.</p>
        </div>
        <div className="card highlighted">
          <h3>Warp Agent</h3>
          <p>Базовая настройка безопасности: firewall, обновления и другие защитные меры без долгой ручной настройки.</p>
        </div>
        <div className="card">
          <h3>Базовые меры</h3>
          <p>Автообновления, отдельный пользователь вместо root, отключение входа root и доступа по паролю.</p>
        </div>
      </div>
    </>
  )
}