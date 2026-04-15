import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">План занятия</h2>

      <div className="plan-blocks reveal">
        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">01</span>
            <h3>Масштабируемая разработка</h3>
          </div>
          <ul>
            <li>Как было раньше</li>
            <li>Почему ручной деплой не работает</li>
            <li>Современный подход: ветки и автодеплой</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">02</span>
            <h3>Докер</h3>
          </div>
          <ul>
            <li>Что такое Докер и зачем он нужен</li>
            <li>Контейнеры, образы, тома</li>
            <li>Работа с Докер локально</li>
            <li>Локальные модели и MCP</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">03</span>
            <h3>Сервер и безопасность</h3>
          </div>
          <ul>
            <li>Покупка сервера и настройка домена</li>
            <li>Безопасность через Warp Agent</li>
            <li>SSH-ключи</li>
            <li>Установка Dokploy</li>
          </ul>
        </div>
      </div>
    </>
  )
}