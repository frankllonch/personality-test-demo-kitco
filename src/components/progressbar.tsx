export default function ProgressBar({ index, total }) {
    const progress = ((index + 1) / total) * 100
  
    return (
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between text-sm text-zinc-500">
          <span>Step {index + 1}</span>
          <span>{total}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-zinc-200">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-[#b58f1f] to-[#d4b24c] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }