import React from 'react'

const saladRecipes = [
  {
    title: 'Cucumber salad, cherry tomatoes',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Italian-style tomato salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Potato Salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1518345207567-0051e7379207?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Five-color salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Corn Salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lotus delight salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Avocado Salad',
    time: '32 minutes',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  },
]

function FilterPanel() {
  return (
    <aside className="w-full max-w-[300px] border border-zinc-200 bg-white rounded-xl">
      <div className="p-5 border-b border-zinc-100 flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 4h18M3 12h18M3 20h18" />
        </svg>
        <h3 className="text-xl font-bold text-zinc-900">FILTERS</h3>
      </div>

      <div className="p-5 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-zinc-800">Type</h4>
            <span className="text-pink-600">^</span>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs text-zinc-500">
            {['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'].map((item, index) => (
              <label key={item} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="rounded border-zinc-300 accent-pink-600" 
                  defaultChecked={index === 2 || index === 3}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-zinc-800">Time</h4>
            <span className="text-pink-600">^</span>
          </div>
          <div className="px-2 space-y-4">
            <div className="flex justify-between text-[10px] text-zinc-400">
              <span>30 minutes</span>
              <span>50 minutes</span>
            </div>
            <div className="relative h-1.5 w-full bg-zinc-100 rounded-full">
              <div className="absolute left-[20%] right-[30%] h-full bg-pink-500 rounded-full" />
              <div className="absolute left-[20%] -top-1.5 h-4 w-4 rounded-full border-2 border-pink-500 bg-white" />
              <div className="absolute right-[30%] -top-1.5 h-4 w-4 rounded-full border-2 border-pink-500 bg-white" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-zinc-800">Rating</h4>
            <span className="text-pink-600">^</span>
          </div>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <label key={rating} className="flex items-center gap-2 text-amber-400">
                <input type="checkbox" className="rounded border-zinc-300 accent-pink-600" defaultChecked={index >= 2} />
                <div className="flex gap-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < rating ? '★' : '☆'}</span>
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full rounded-lg bg-[#f3527a] py-3 text-sm font-bold text-white">
          Apply
        </button>
      </div>
    </aside>
  )
}

function RecipeCard({ title, time, image }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4 relative">
        <div className="flex items-start justify-between">
          <h3 className="line-clamp-2 text-sm font-bold text-zinc-900 pr-8">{title}</h3>
          <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-pink-100 text-pink-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <span className="rounded-lg bg-pink-50 px-2 py-1 text-[10px] font-bold text-pink-500">
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}

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

import errorIllustration from '../assets/Error.png'

function NoResultsContent({ query }) {
  const tags = [
    { text: 'Sweet Cake', color: 'bg-pink-100 text-pink-500' },
    { text: 'Black Cake', color: 'bg-indigo-100 text-indigo-500' },
    { text: 'Pozole Verde', color: 'bg-fuchsia-100 text-fuchsia-500' },
    { text: 'Healthy food', color: 'bg-cyan-100 text-cyan-600' },
  ]

  return (
    <section className="flex flex-1 flex-col items-center px-4 pt-12 text-center">
      <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">
        Sorry, no results were found for “{query}”
      </h2>
      <div className="relative mt-12 mb-8">
        <img src={errorIllustration} alt="No results" className="h-64 w-auto object-contain" />
      </div>
      <p className="text-lg text-zinc-600">
        We have all your Independence Day sweets covered.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${tag.color}`}
          >
            {tag.text}
          </span>
        ))}
      </div>
    </section>
  )
}

function SearchResultsPage({ query = '' }) {
  const isCakes = query.toLowerCase() === 'cakescascsa'
  const isSalad = query.toLowerCase().includes('salad')
  
  // Default to showing salad if it's not cakes, for demo purposes as requested
  const showResults = !isCakes && (isSalad || query === '')

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1280px] px-8 py-8">
        <div className="flex gap-8">
          <FilterPanel />
          
          <main className="flex-1">
            {showResults ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-zinc-900">
                    {query || 'Salad'} <span className="text-zinc-400 font-normal">({saladRecipes.length})</span>
                  </h1>
                  <div className="flex items-center gap-2">
                    <select className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500 outline-none">
                      <option>A-Z</option>
                      <option>Newest</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {saladRecipes.map((recipe, index) => (
                    <RecipeCard key={index} {...recipe} />
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-center gap-2 pt-8">
                  <button className="p-2 text-zinc-400 hover:text-zinc-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {[1, 2, 3, 4, '...', 10, 11].map((page, index) => (
                    <button
                      key={index}
                      className={`h-8 w-8 rounded-lg text-xs transition-colors ${
                        page === 1 ? 'bg-[#f3527a] text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="p-2 text-zinc-400 hover:text-zinc-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <NoResultsContent query={query} />
            )}
          </main>
        </div>
      </div>

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

export default SearchResultsPage
