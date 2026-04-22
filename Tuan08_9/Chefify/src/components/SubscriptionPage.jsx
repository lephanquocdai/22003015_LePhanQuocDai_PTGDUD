import React, { useState } from 'react'
import showcaseImage from '../assets/subscription_page_food_showcase.png'

function FooterColumn({ title, items }) {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      {items.map((item) => (
        <p key={item} className="text-base text-zinc-300">
          {item}
        </p>
      ))}
    </div>
  )
}

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly')

  const benefits = [
    '20,000+ recipes to suit all tastes and skill levels',
    'Filter for diets, cook times, and more',
    'Personal Recipe Box for favorites',
    'Gain exclusive access to our subscriber-only mobile app.',
  ]

  const accessCards = [
    {
      title: 'Cooking',
      description: 'Enjoy recipes, advice and inspiration for any occasion.',
    },
    {
      title: 'Wirecutter',
      description: 'Explore independent reviews for thousands of products.',
    },
    {
      title: 'Games',
      description: 'Unwind with Spelling Bee, Wordle, The Crossword',
    },
    {
      title: 'The Athletic',
      description: 'Discover in-depth, personalized sports journalism.',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main Content Container */}
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        {/* Breadcrumbs */}
        <div className="mb-12 flex items-center gap-2 text-sm text-zinc-500">
          <span>Recipes</span>
          <span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-pink-600">Subscribe</span>
        </div>

        {/* Section 1: Hero Subscription */}
        <section className="mb-32 flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">
                This recipe is exclusively available to subscribers
              </h3>
              <h1 className="text-4xl font-bold leading-tight text-[#f3527a] md:text-5xl">
                Join now to access effortless, hassle-free recipes
              </h1>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 text-amber-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-zinc-600">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-1">
              <div className="text-2xl font-bold text-zinc-800">0.25USD / Week</div>
              <p className="text-sm text-zinc-500">Billed as $1 every 4 weeks for the first year</p>
            </div>

            <div className="space-y-6">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f3527a] py-4 font-bold text-white transition-opacity hover:opacity-90 md:max-w-md">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9.5h20" />
                </svg>
                Subscribe Now
              </button>
              <div className="text-center md:max-w-md">
                <button className="text-sm font-semibold text-[#f3527a] hover:underline">Cancel or Pause anytime</button>
              </div>
            </div>
          </div>

          <div className="flex-1 p-2">
            <div className="overflow-hidden rounded-lg border-[6px] border-[#f3527a]">
              <img src={showcaseImage} alt="Food showcase" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Section 2: Cards */}
        <section className="mb-40">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#f3527a]">
            An All Access subscription includes
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {accessCards.map((card, index) => (
              <div key={index} className="flex flex-col items-center rounded-xl border border-zinc-100 bg-white p-10 text-center shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-zinc-800">{card.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Cooking Only Plan */}
        <section className="mb-32 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-pink-600 text-white">
              <span className="text-xs">★</span>
            </div>
            <span className="text-2xl font-bold text-zinc-800">Chefify</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-[#f3527a]">Subscribe to Chefify Cooking only</h2>
          <p className="mb-12 max-w-2xl text-zinc-600">
            Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.
          </p>

          <div className="w-full max-w-md space-y-4">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all ${
                selectedPlan === 'monthly' ? 'border-[#f3527a] bg-pink-50' : 'border-zinc-200'
              }`}
            >
              <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                selectedPlan === 'monthly' ? 'border-[#f3527a]' : 'border-zinc-300'
              }`}>
                {selectedPlan === 'monthly' && <div className="h-2.5 w-2.5 rounded-full bg-[#f3527a]" />}
              </div>
              <span className="font-semibold text-zinc-800">$2/month (Billed every 4 weeks)</span>
            </button>

            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all ${
                selectedPlan === 'yearly' ? 'border-[#f3527a] bg-pink-50' : 'border-zinc-200'
              }`}
            >
              <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                selectedPlan === 'yearly' ? 'border-[#f3527a]' : 'border-zinc-300'
              }`}>
                {selectedPlan === 'yearly' && <div className="h-2.5 w-2.5 rounded-full bg-[#f3527a]" />}
              </div>
              <span className="font-semibold text-zinc-800">$20/year (Billed once annually)</span>
            </button>

            <div className="pt-4">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f3527a] py-4 font-bold text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9.5h20" />
                </svg>
                Subscribe Now
              </button>
              <button className="mt-6 text-sm font-semibold text-[#f3527a] hover:underline">Cancel or Pause anytime</button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer from RecipeBoxPage */}
      <footer className="bg-[#1b2130] px-8 py-12 text-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 md:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold">About Us</h4>
            <p className="mt-3 text-base text-zinc-300">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md bg-white px-3 py-2 text-sm text-zinc-800 focus:outline-none"
              />
              <button className="rounded-md bg-pink-500 px-4 py-2 text-sm font-semibold">Send</button>
            </div>
            <p className="mt-8 text-3xl font-semibold">Chefify</p>
          </div>

          <FooterColumn title="Learn More" items={['Our Cooks', 'See Our Features', 'FAQ']} />
          <FooterColumn title="Shop" items={['Gift Subscription', 'Send Us Feedback']} />
          <FooterColumn
            title="Recipes"
            items={['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Christmas']}
          />
        </div>
      </footer>
    </div>
  )
}

export default SubscriptionPage
