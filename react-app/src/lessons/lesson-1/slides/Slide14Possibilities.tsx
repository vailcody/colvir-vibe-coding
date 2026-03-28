import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide14Possibilities({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Возможности</h2>
      <ul className="content-list stagger-list">
        <li>MVP и проверка гипотез — рабочий продукт за часы вместо недель</li>
        <li>Персональные инструменты — приложения под себя: трекеры, калькуляторы, дашборды</li>
        <li>Интеграция сервисов — связка API, автоматизация между системами</li>
        <li>Лендинги и промо-страницы — быстрая генерация маркетинговых материалов</li>
        <li>Обработка данных — парсинг, визуализация, отчёты из Excel и CSV</li>
        <li>Документация — руководства пользователя, базы знаний</li>
      </ul>
    </>
  )
}
