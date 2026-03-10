import { useEffect, useState } from 'react'
import Intropage from './pages/intropage'
import Testpage from './pages/testpage'
import Endpage from './pages/endpage'

export default function App() {
  const [questions, setQuestions] = useState([])
  const [screen, setScreen] = useState('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/data/questions.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setQuestions(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading questions:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const handleStart = () => {
    setScreen('test')
  }

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleNext = () => {
    if (screen === 'intro') {
      setScreen('test')
      return
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setScreen('end')
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    } else {
      setScreen('intro')
    }
  }

  const handleRestart = () => {
    setAnswers({})
    setCurrentIndex(0)
    setScreen('intro')
  }

  if (loading) {
    return (
      <div className="app-shell flex min-h-screen items-center justify-center">
        <div className="text-lg text-zinc-500">Loading test...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app-shell flex min-h-screen items-center justify-center px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-red-600">Error loading questions</h2>
          <p className="mt-4 text-zinc-700">{error}</p>
        </div>
      </div>
    )
  }

  if (!questions.length) {
    return (
      <div className="app-shell flex min-h-screen items-center justify-center">
        <div className="text-lg text-zinc-500">No questions found.</div>
      </div>
    )
  }

  return (
    <div className="app-shell">
      {screen === 'intro' && <Intropage onStart={handleStart} />}
      {screen === 'test' && (
        <Testpage
          question={questions[currentIndex]}
          index={currentIndex}
          total={questions.length}
          selectedValue={answers[questions[currentIndex].id] || null}
          onSelect={(value) => handleAnswer(questions[currentIndex].id, value)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {screen === 'end' && (
        <Endpage
          answers={answers}
          questions={questions}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}