import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide15Limitations({}: SlideProps) {
  return (
    <>
      <div className="geo-outline" style={{ position: 'absolute', width: 100, height: 100, top: '12%', right: '8%', border: '2px solid var(--text-primary)', zIndex: -1 }} />
      <span className="slide-number reveal">05</span>
      <h2 className="reveal">Ограничения</h2>
      <ul className="content-list stagger-list">
        <li>Не заменяет разработчика на сложных архитектурных задачах</li>
        <li>Garbage in → garbage out</li>
        <li>Контекстное окно ограничено — декомпозиция</li>
        <li>AI может генерить уязвимый код — ревью обязательно</li>
        <li>Галлюцинации: выдумывает API и библиотеки</li>
      </ul>
    </>
  )
}
