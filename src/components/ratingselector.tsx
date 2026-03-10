export default function Ratingselector({ selectedValue, onSelect }) {
    return (
      <div className="flex items-center gap-8">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`floating-rating ${selectedValue === value ? 'active' : ''}`}
          >
            {value}
          </button>
        ))}
      </div>
    )
  }