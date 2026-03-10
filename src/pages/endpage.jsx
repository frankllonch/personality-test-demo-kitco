export default function Endpage({ answers, questions, onRestart }) {
    return (
      <div className="flex min-h-screen items-center justify-center px-8 text-center">
        <div className="max-w-4xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#b58f1f]">
            complete
          </p>
  
          <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-900 md:text-7xl">
            Demo finished
          </h1>
  
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="flex items-center justify-between text-left">
                <span className="text-zinc-700">{q.title}</span>
                <span className="font-semibold text-[#b58f1f]">{answers[q.id] ?? '-'}</span>
              </div>
            ))}
          </div>
  
          <button
            onClick={onRestart}
            className="kitco-button mt-10 rounded-full px-8 py-4 text-lg font-semibold"
          >
            Restart
          </button>
        </div>
      </div>
    )
  }