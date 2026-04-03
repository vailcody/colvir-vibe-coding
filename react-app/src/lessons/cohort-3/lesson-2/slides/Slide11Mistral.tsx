import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide11Mistral({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal">Транскрибация через Mistral</h2>
      <pre className="code-block reveal" style={{
        background: '#1a1a1a',
        color: '#f8f8f2',
        padding: '1.5rem',
        borderRadius: '4px',
        fontSize: 'clamp(0.8rem, 1.3vw, 1rem)',
        lineHeight: 1.6,
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace',
        marginTop: '1rem'
      }}>
{`# FastAPI endpoint для транскрибации аудио
from fastapi import FastAPI, UploadFile
from mistralai import Mistral

app = FastAPI()
client = Mistral(api_key="YOUR_MISTRAL_API_KEY")

@app.post("/transcribe")
async def transcribe_audio(file: UploadFile):
    audio_bytes = await file.read()          # Аудио от мобилки
    result = client.audio.transcribe(audio_bytes)
    return {"text": result.text}             # Возвращаем мобилке`}
      </pre>
      <div className="steps reveal" style={{ marginTop: '1.25rem', fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>
        <div className="step"><span className="step-number">→</span><span className="step-text">Мобилка записывает аудио и отправляет на бэкенд</span></div>
        <div className="step"><span className="step-number">→</span><span className="step-text">FastAPI вызывает Mistral → получает текст → сохраняет в БД</span></div>
        <div className="step"><span className="step-number">→</span><span className="step-text">Мобилка получает транскрипцию и показывает пользователю</span></div>
      </div>
    </>
  )
}
