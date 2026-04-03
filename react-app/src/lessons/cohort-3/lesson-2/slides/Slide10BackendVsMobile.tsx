import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide10BackendVsMobile({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">10</span>
      <h2 className="reveal">Что куда класть</h2>
      <div className="card-grid stagger-list">
        <div className="card">
          <h3>На бэкенд (FastAPI)</h3>
          <ul className="content-list" style={{ marginTop: '0.5rem' }}>
            <li>Бизнес-логика и правила</li>
            <li>Транскрибация через Mistral</li>
            <li>Хранение аудио-файлов</li>
            <li>Авторизация и сессии</li>
          </ul>
        </div>
        <div className="card">
          <h3>В мобильном приложении</h3>
          <ul className="content-list" style={{ marginTop: '0.5rem' }}>
            <li>UI-компоненты и навигация</li>
            <li>Запись аудио с микрофона</li>
            <li>Локальный кэш</li>
            <li>Настройки пользователя</li>
          </ul>
        </div>
      </div>
      <div className="quote reveal" style={{ marginTop: '1.5rem' }}>
        Правило: обновление бэкенда = мгновенно. Обновление мобилки через сторы = дни проверки. Держите логику на сервере.
      </div>
    </>
  )
}
