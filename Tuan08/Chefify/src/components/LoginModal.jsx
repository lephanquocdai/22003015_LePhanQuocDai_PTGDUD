const LOGIN_SIDE_IMAGE =
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80'

function SocialButton({ label, icon, iconColor = 'text-zinc-700' }) {
  return (
    <button className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-100 py-2.5 text-[15px] text-zinc-600 hover:bg-slate-200">
      <span className={`text-base font-semibold ${iconColor}`}>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

function LoginModal({ onClose, onContinue }) {
  return (
    <section className="absolute inset-0 z-30 grid place-items-center bg-black/35 px-4 py-6">
      <div className="grid w-full max-w-[980px] overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-[1fr_1.25fr]">
        <div className="relative hidden md:block">
          <img src={LOGIN_SIDE_IMAGE} alt="Food plate" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <p className="absolute left-1/2 top-14 w-[78%] -translate-x-1/2 text-center text-[42px] font-bold leading-tight text-white">
            Embrace the art of cooking, where flavors come alive!
          </p>
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between">
            <h2 className="text-5xl font-bold text-zinc-900">Login</h2>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
              aria-label="Close login modal"
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

          <p className="mt-4 text-[34px] text-zinc-600">Enter your email to log in.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 w-full rounded-md bg-zinc-100 px-4 py-3 text-base text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            onClick={onContinue}
            className="mt-6 w-full rounded-xl bg-pink-600 py-3 text-lg font-semibold text-white hover:bg-pink-500"
          >
            Continue
          </button>

          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="text-sm font-semibold text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <p className="mb-4 text-center text-xs text-zinc-500">
            By continuing, you agree to the updated Terms of Sale, Terms of Service, and
            Privacy Policy.
          </p>

          <div className="space-y-3">
            <SocialButton label="Continue with Google" icon="G" iconColor="text-red-500" />
            <SocialButton label="Continue with Facebook" icon="f" iconColor="text-blue-600" />
            <SocialButton label="Continue with Apple" icon="A" iconColor="text-zinc-800" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginModal
