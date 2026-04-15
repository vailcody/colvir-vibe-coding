import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide18Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">18</span>
      <h2 className="reveal">Домашнее задание</h2>

      <ul className="content-list stagger-list">
        <li>Установить Docker Desktop на свой компьютер</li>
        <li>Запустить свой первый контейнер: docker run hello-world</li>
        <li>Упаковать свой проект в Dockerfile и запустить локально</li>
        <li>Сгенерировать SSH-ключ и настроить доступ к своему серверу</li>
        <li>Установить Dokploy и подключить GitHub-репозиторий</li>
      </ul>
    </>
  )
}