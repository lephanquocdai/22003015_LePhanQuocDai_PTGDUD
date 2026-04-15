import errorIllustration from '../assets/Error.png'

function FilterPanel() {
  return (
    <aside className="flex w-full max-w-[300px] min-h-[calc(90vh-200px)] flex-col self-stretch rounded-lg border border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 p-4">
        <h3 className="text-xl font-bold text-zinc-800">FILTERS</h3>
      </div>

      <div className="flex flex-1 flex-col space-y-5 border-b border-zinc-200 p-4">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-700">Type</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-zinc-600">
            {['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'].map(
              (item, index) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked={index === 2 || index === 3} />
                  {item}
                </label>
              ),
            )}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-700">Time</h4>
          <div className="space-y-2 text-xs text-zinc-500">
            <div className="flex justify-between">
              <span>30 minutes</span>
              <span>50 minutes</span>
            </div>
            <input type="range" min="0" max="100" defaultValue="35" className="w-full accent-pink-500" />
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-700">Rating</h4>
          <div className="space-y-2 text-amber-400">
            {['★★★★★', '★★★★☆', '★★★☆☆', '★★☆☆☆', '★☆☆☆☆'].map((stars, index) => (
              <label key={stars} className="flex items-center gap-2 text-base">
                <input type="checkbox" defaultChecked={index >= 2} />
                <span>{stars}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto p-4">
        <button className="w-full rounded-md bg-pink-500 py-2.5 text-sm font-semibold text-white hover:bg-pink-600">
          Apply
        </button>
      </div>
    </aside>
  )
}

function NoResultsContent() {
  return (
    <section className="flex flex-1 flex-col items-center px-4 text-center">
      <h2 className="text-5xl font-bold text-zinc-900">Sorry, no results were found for “cakescascsa”</h2>
      <img
        src={errorIllustration}
        alt=""
        className="mt-8 max-h-[280px] w-auto max-w-full object-contain"
      />
      <p className="mt-6 text-3xl text-zinc-600">We have all your Independence Day sweets covered.</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
        {['Sweet Cake', 'Black Cake', 'Pozole Verde', 'Healthy food'].map((tag, index) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1 ${
              index === 0
                ? 'bg-pink-100 text-pink-500'
                : index === 1
                  ? 'bg-indigo-100 text-indigo-500'
                  : index === 2
                    ? 'bg-fuchsia-100 text-fuchsia-500'
                    : 'bg-cyan-100 text-cyan-600'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
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

function SearchResultsPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-100">
      <section className="mx-auto flex w-full max-w-[1280px] items-stretch gap-8 px-8 pb-16 pt-8">
        <FilterPanel />
        <NoResultsContent />
      </section>

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
                className="w-full bg-white rounded-md px-3 py-2 text-sm text-zinc-800 focus:outline-none"
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
