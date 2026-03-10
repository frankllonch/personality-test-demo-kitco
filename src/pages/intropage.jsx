export default function Intropage({ onStart }) {
    return (
      <div className="flex min-h-screen items-center justify-center px-8 text-center">
        <div className="max-w-4xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#b58f1f]">
           Visual test flow
          </p>
  
          <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-900 md:text-7xl">
          Dinámica de Talentos
          </h1>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
           Observa la imagen, conecta con tu lado creativo, intuitivo y emocional de tu cerebro ¡Usa las flechas!
          </p>
  
          <button
            onClick={onStart}
            className="kitco-button mt-10 rounded-full px-8 py-4 text-lg font-semibold"
          >
            Start
          </button>
        </div>
      </div>
    )
  }