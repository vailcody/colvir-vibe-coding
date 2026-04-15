import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04Workflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">План на сегодня</h2>
      <ul className="content-list stagger-list">
        <li>Настройка рабочего окружения вайб-кодера</li>
        <li>Запускаем прототип приложения локально и «оживляем» его с помощью Cursor/Claude Code</li>
        <li>Профессиональный рабочий процесс с Git Flow</li>
        <li>Режимы работы кодинг-агентов: Agent, Plan, Debug</li>
        <li>Подключение и использование MCP, Skills в Cursor</li>
        <li>Работа с контекстом и правилами для кодинг-агентов</li>
        <li>Стратегии работы с ошибками агентов</li>
      </ul>
    </>
  )
}
