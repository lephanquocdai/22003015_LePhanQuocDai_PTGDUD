const recipes = [
  {
    title: 'Italian-style tomato salad',
    time: '14 minutes',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Vegetable and shrimp spaghetti',
    time: '15 minutes',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lotus delight salad',
    time: '20 minutes',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Snack cakes',
    time: '21 minutes',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image:
      'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Bean, shrimp, and potato salad',
    time: '32 minutes',
    image:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sunny-side up fried eggs',
    time: '20 minutes',
    image:
      'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lotus delight salad',
    time: '32 minutes',
    image:
      'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?auto=format&fit=crop&w=900&q=80',
  },
]

function RecipeCard({ title, time, image }) {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug text-zinc-900">{title}</h3>
          <button className="rounded-full border border-pink-200 p-1.5 text-pink-500" aria-label="Save recipe">
            ♡
          </button>
        </div>
        <p className="text-sm font-medium text-pink-500">{time}</p>
      </div>
    </article>
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

function RecipeBoxPage() {
  return (
    <div className="bg-zinc-100">
      <section className="mx-auto w-full max-w-[1280px] px-8 pb-16 pt-8">
        <p className="text-sm text-zinc-500">
          Home <span className="mx-2">›</span> <span className="text-pink-500">Your Recipe Box</span>
        </p>

        <h1 className="mt-8 text-5xl font-bold text-zinc-900">Emma Gonzalez's Recipe Box</h1>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
            alt="Emma Gonzalez"
            className="h-28 w-28 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="max-w-[760px] text-base leading-relaxed text-zinc-600">
              Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at the
              Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food
              publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a
              wide range of culinary delights.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <p className="text-pink-500">6.5k Subscribers</p>
              <button className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white">Share</button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-8 border-b border-zinc-200 text-sm">
          <button className="border-b-2 border-pink-500 pb-3 font-semibold text-pink-500">Saved Recipes</button>
          <button className="pb-3 text-zinc-500">Folders</button>
          <button className="pb-3 text-zinc-500">Recipes by Genevieve</button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard key={`${recipe.title}-${recipe.time}`} {...recipe} />
          ))}
        </div>

        <div className="mt-10 flex justify-end gap-2 text-sm">
          {['<', '1', '2', '3', '4', '...', '10', '11', '>'].map((page, index) => (
            <button
              key={page + index}
              className={`grid h-8 min-w-8 place-items-center rounded-md border px-2 ${
                page === '1'
                  ? 'border-pink-500 bg-pink-500 text-white'
                  : 'border-zinc-200 bg-white text-zinc-500'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
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

export default RecipeBoxPage
