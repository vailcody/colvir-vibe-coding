import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide09WhenWhat({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">09</span>
      <h2 className="reveal">Когда какой бэкенд</h2>
      <table className="reveal" style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
        marginTop: '1rem'
      }}>
        <thead>
          <tr style={{ borderBottom: '3px solid var(--accent)' }}>
            <th style={{ textAlign: 'left', padding: '0.6rem 0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Фреймворк</th>
            <th style={{ textAlign: 'left', padding: '0.6rem 0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Язык</th>
            <th style={{ textAlign: 'left', padding: '0.6rem 0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Когда использовать</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['FastAPI ⭐', 'Python', 'ML/AI, транскрибация, быстрый старт — наш случай'],
            ['Next.js API', 'TypeScript', 'Full-stack, уже знакомый стек, один проект'],
            ['Express', 'Node.js', 'Простые API, минимализм, без излишеств'],
            ['Strapi', 'Node.js', 'Headless CMS — контент часто меняется без деплоя'],
            ['Supabase', '—', 'БД + авторизация + storage как SaaS'],
          ].map(([fw, lang, when], i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.03)' }}>
              <td style={{ padding: '0.7rem 0.75rem', fontWeight: 700 }}>{fw}</td>
              <td style={{ padding: '0.7rem 0.75rem', color: 'var(--text-secondary)' }}>{lang}</td>
              <td style={{ padding: '0.7rem 0.75rem', color: 'var(--text-secondary)' }}>{when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
