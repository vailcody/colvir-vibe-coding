import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide03Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">—</span>
      <h2 className="reveal">План обучения</h2>
      <div className="plan-grid reveal">
        <div className="plan-col plan-col-active">
          <h3>Занятие 1 <span className="plan-hours">1 час</span></h3>
          <h4>Создаём прототип</h4>
          <ul>
            <li>Введение в вайбкодинг</li>
            <li>Карта фреймворков и инструментов</li>
            <li>Создание прототипа с помощью Replit, Lovable, v0, Харви</li>
            <li>Отличия платформ</li>
            <li>Открыли в Cursor и запустили локально</li>
          </ul>
          <div className="plan-hw">
            <strong>ДЗ:</strong> Создать прототип для своего проекта
          </div>
        </div>
        <div className="plan-col">
          <h3>Занятие 2 <span className="plan-hours">2 часа</span></h3>
          <h4>Итеративная доработка и апгрейд</h4>
          <ul>
            <li>Установка и настройка рабочего окружения</li>
            <li>Работа с git</li>
            <li>Запуск и оживление прототипа в Cursor</li>
            <li>Экономное использование Cursor</li>
            <li>Режимы работы кодинг-агентов</li>
            <li>Подключение и использование MCP</li>
            <li>Работа с контекстом и правилами</li>
            <li>Стратегии работы с ошибками агентов</li>
          </ul>
          <div className="plan-hw">
            <strong>ДЗ:</strong> Развернуть прототип в Cursor и доработать
          </div>
        </div>
        <div className="plan-col">
          <h3>Занятие 3 <span className="plan-hours">1 час</span></h3>
          <h4>Продвинутый вайбкодинг</h4>
          <ul>
            <li>Spec-Driven Development — приложения через спецификации</li>
            <li>Установка и настройка OpenSpec в Cursor</li>
            <li>Создание своего MCP с помощью SDD</li>
            <li>Голосовой ввод в вайб-кодинге</li>
            <li>Feedback loop: AI Code Review, Static Analysis, VSCode Ext</li>
          </ul>
          <div className="plan-hw">
            <strong>ДЗ:</strong> Установить OpenSpec и продолжить доработку
          </div>
        </div>
      </div>
    </>
  )
}
