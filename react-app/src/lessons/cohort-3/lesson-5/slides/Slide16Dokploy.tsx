import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide16Dokploy({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">17</span>
      <h2 className="reveal">Установка Dokploy</h2>

      <div className="highlight-box reveal">
        <p>Dokploy, бесплатная open-source платформа для деплоя. Веб-интерфейс для управления Docker-контейнерами и автодеплоя из Git.</p>
      </div>

      <div className="steps reveal" style={{ marginTop: '1.5rem' }}>
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Установка</div>
            <div className="step-desc">Один скрипт на чистом сервере с Docker. Автоматически поднимает панель управления</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Подключение Git</div>
            <div className="step-desc">Привязка GitHub-репозитория. Автодеплой при пуше в ветку</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Конфигурация</div>
            <div className="step-desc">Переменные окружения, порты, тома — всё через веб-интерфейс</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Сегодня</div>
            <div className="step-desc">Сегодня ставим Dokploy. Детальную настройку деплоя и конфигурации разберём на следующем занятии</div>
          </div>
        </div>
      </div>
    </>
  )
}