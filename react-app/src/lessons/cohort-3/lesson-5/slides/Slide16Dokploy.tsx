import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide16Dokploy({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">16</span>
      <h2 className="reveal">Установка Dokploy</h2>

      <div className="highlight-box reveal">
        <p>Dokploy — бесплатная open-source платформа для деплоя. Веб-интерфейс для управления Докер-контейнерами и автодеплоя из Git.</p>
      </div>

      <div className="steps reveal" style={{ marginTop: '1.5rem' }}>
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Установка</div>
            <div className="step-desc">Один скрипт на чистом сервере с Докер. Автоматически поднимает панель управления</div>
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
            <div className="step-text">Деплой</div>
            <div className="step-desc">Push в Git → автоматическая сборка и запуск. Откат при ошибке в один клик</div>
          </div>
        </div>
      </div>
    </>
  )
}