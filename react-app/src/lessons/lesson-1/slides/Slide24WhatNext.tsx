import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide24WhatNext({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">13</span>
      <h2 className="reveal">Что дальше?</h2>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '100%' }}>
        Почему продолжаем локально, а не в браузерных агентах?
      </p>
      <ul className="content-list stagger-list" style={{ marginBottom: '2rem' }}>
        <li>Браузерные агенты подсаживают на свои сервисы, БД и авторизацию — потом проблематично слезть, а при нагрузках встаёт в копеечку</li>
        <li>Ограничены технологиями и возможностями их агентов</li>
      </ul>
      <div className="steps">
        <div className="step">
          <span className="step-number" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>Занятие 2</span>
          <span className="step-text">Оживление прототипа в локальной IDE</span>
        </div>
        <div className="step">
          <span className="step-number" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>Занятие 3</span>
          <span className="step-text">Spec-Driven Development, облачные агенты, код-ревью</span>
        </div>
      </div>
    </>
  )
}
