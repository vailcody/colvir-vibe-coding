import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide05DifyWorkflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Наш воркфлоу в Dify</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1.5rem' }}>User Input → Doc Extractor → LLM → Structured Output</p>
      <img src={`${BASE}lesson-2/img/dify-workflow.jpg`} alt="Dify Workflow Screenshot" className="reveal" style={{ width: '100%', maxWidth: 900, borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
    </>
  )
}
