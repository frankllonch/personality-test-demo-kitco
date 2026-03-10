import Mediacard from '../components/mediacard'
import Ratingselector from '../components/ratingselector'

export default function Testpage({
  question,
  index,
  total,
  selectedValue,
  onSelect,
  onNext,
  onPrev,
}) {
  const selectedVideo = selectedValue ? question.videos[String(selectedValue)] : null

  return (
    <div className="main-grid relative">
      <button
        onClick={onPrev}
        className="nav-arrow left"
        aria-label="Previous question"
      >
        ‹
      </button>

      <button
        onClick={onNext}
        className="nav-arrow right"
        aria-label="Next question"
      >
        ›
      </button>

      <div className="center-stage">
        <div className="content-block">
          <div className="text-side">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#b58f1f]">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>

            <h1 className="mt-4 max-w-[520px] text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-zinc-900 md:text-7xl">
            ¿Cómo percibes este talento en ti?
            </h1>

            <p className="mt-6 max-w-[520px] text-lg leading-8 text-zinc-600 md:text-xl">
            Observa la imagen, conecta con tu lado creativo, intuitivo y emocional de tu cerebro.
            </p>

            <div className="mt-14">
              <Ratingselector selectedValue={selectedValue} onSelect={onSelect} />
            </div>
          </div>

          <div className="media-side">
            <Mediacard
              title={question.title}
              text={question.text}
              image={question.image}
              videoPath={selectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}