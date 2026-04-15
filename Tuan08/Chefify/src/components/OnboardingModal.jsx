import StepDots from './StepDots'
import modalImage from '../assets/LandingPage.png'

function FoodCollage() {
  return (
    <div className="relative h-[330px] overflow-hidden rounded-xl bg-zinc-50 shadow-sm">
      <img
        src={modalImage}
        alt="Chefify onboarding food"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

function OnboardingModal({ slides, activeStep, onNext, onClose, onSkip }) {
  return (
    <section className="absolute inset-0 z-20 grid place-items-center bg-black/35 p-4">
      <div className="w-full max-w-[660px] rounded-2xl bg-white px-5 pb-8 pt-4 shadow-2xl sm:px-6">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full p-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700"
            aria-label="Close onboarding"
          >
            <svg viewBox="0 0 20 20" className="h-7 w-7" fill="none">
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-[52px] font-bold leading-tight text-pink-600">
            {slides[activeStep].title}
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-[15px] text-zinc-600">
            {slides[activeStep].description}
          </p>
        </div>

        <div className="mt-5">
          <FoodCollage />
          <div className="mt-4">
            <StepDots activeStep={activeStep} totalSteps={slides.length} />
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-sm flex-col items-center gap-3">
          <button
            onClick={onNext}
            className="w-full rounded-xl bg-pink-600 py-3 text-base font-semibold text-white transition hover:bg-pink-500"
          >
            {activeStep === slides.length - 1 ? 'Get Started' : 'Next'}
          </button>
          <button onClick={onSkip} className="text-sm text-zinc-500 hover:text-zinc-700">
            Skip
          </button>
        </div>
      </div>
    </section>
  )
}

export default OnboardingModal
