import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08WhatIsDocker({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Что такое Докер</h2>

      <div className="highlight-box reveal">
        <p>Докер упаковывает приложение в образ — мини-операционную систему. Этот образ запускается на любом сервере, где установлен Докер, и работает одинаково.</p>
      </div>

      <div className="card-grid reveal" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>Проблема</h3>
          <p>Версии библиотек на компьютере отличаются от версий на сервере. Код работает у разработчика, но падает в продакшене.</p>
        </div>
        <div className="card highlighted">
          <h3>Решение</h3>
          <p>Докер создаёт изолированную среду — контейнер. Внутри те же библиотеки, та же ОС, тот же код. Работает везде одинаково.</p>
        </div>
      </div>
    </>
  )
}