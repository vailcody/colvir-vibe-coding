import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide05OldProblems({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">05</span>
      <h2 className="reveal">Почему это не масштабируется</h2>

      <div className="card-grid reveal">
        <div className="card">
          <h3>Разные версии</h3>
          <p>Библиотеки и языки на компьютере разработчика отличаются от серверных. «У меня работает» — не работает у пользователей.</p>
        </div>
        <div className="card">
          <h3>Сетевые сбои</h3>
          <p>FTP-загрузка прерывается. Часть файлов не доходит — сайт падает или показывает ошибки.</p>
        </div>
        <div className="card highlighted">
          <h3>Даунтайм</h3>
          <p>Пользователи видят сломанный сайт в момент обновления. Каждый деплой — риск потери посетителей.</p>
        </div>
        <div className="card">
          <h3>Нет отката</h3>
          <p>Без системы версий откат возможен только вручную — если помнишь, как было.</p>
        </div>
      </div>
    </>
  )
}