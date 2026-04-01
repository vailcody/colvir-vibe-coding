import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide02Author({}: SlideProps) {
  return (
    <>
      <div className="geo-square" style={{ width: 60, height: 60, top: '8%', right: '20%', opacity: 0.12 }} />
      <span className="slide-number reveal">02</span>
      <div className="author-layout reveal">
        <div className="author-photo">
          <img src={`${BASE}lesson-1/author.jpg`} alt="Константин Чуйков" />
        </div>
        <div className="author-info">
          <h2 style={{ marginBottom: '0.6rem' }}>Константин Чуйков</h2>
          <p className="author-bio">
            Автор канала <a href="https://t.me/vibe_coding" target="_blank" rel="noreferrer">«Вайб-кодинг по Чуйкову»</a> и лидер сообщества <a href="https://t.me/vibe_coding_community" target="_blank" rel="noreferrer">Vibe Coding Community</a>.
          </p>
          <p className="author-bio">
            15 лет в IT. Прошел путь от фрилансера и фаундера веб-студии, до СТО в стартапе и руководителя разработки в бигтехе.
          </p>
          <p className="author-bio">
            Проводил обучение вайб-кодингу в Яндекс, СберУниверситет, Синергии и Правительстве МО.
          </p>
        </div>
      </div>
    </>
  )
}
