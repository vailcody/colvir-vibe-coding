import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide13Available({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', height: '100%' }}>
      <h2 className="phrase-text reveal" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>Но остаётся доступным<br />для всех</h2>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', marginTop: '1.5rem', textAlign: 'center' }}>
        Даже без технического бэкграунда
      </p>
    </div>
  )
}
