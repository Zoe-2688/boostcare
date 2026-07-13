export default function Progress({ step, total = 3 }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-1 rounded-full ${
            i < step ? 'bg-action-primary' : 'bg-neutral-200'
          }`}
        />
      ))}
    </div>
  )
}
