function StepDots({ activeStep, totalSteps }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <span
          key={index}
          className={`h-2.5 w-2.5 rounded-full transition-colors ${
            index === activeStep ? 'bg-pink-600' : 'bg-zinc-300'
          }`}
        />
      ))}
    </div>
  )
}

export default StepDots
