import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide23ContextWeapon({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">23</span>
      <h2 className="reveal">Контекст — главное оружие</h2>
      <p className="subtitle reveal">Context Arena: качество падает после ~150K токенов</p>
      <ul className="content-list stagger-list">
        <li>Отслеживайте использование в Cursor (правая панель)</li>
        <li>/summarize — сжатие контекста когда он раздулся</li>
        <li>Новый чат = чистый контекст для новой задачи</li>
        <li>Переписать сообщение выше → отрезать хвост чата</li>
        <li>Duplicate Chat — параллельные ветки от одной точки</li>
        <li>Декомпозиция: задача должна влезть в 150K токенов</li>
      </ul>
    </>
  )
}
