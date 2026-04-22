function RecipePreviewCard() {
  return (
    <article className="max-w-[760px] rounded-2xl border border-zinc-200 bg-white/95 p-6 shadow-sm backdrop-blur-[1px]">
      <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-semibold text-zinc-800">
        Recipes
      </span>
      <h2 className="mt-4 text-[40px] font-bold leading-tight text-pink-600">Salad Caprese</h2>
      <p className="mt-2 max-w-[95%] text-[27px] leading-relaxed text-zinc-600">
        Classic Italian Salad Caprese with fresh mozzarella, tomatoes, basil and
        olive oil. Perfect starter for every meal.
      </p>

      <div className="mt-7 flex items-center justify-between text-base">
        <span className="font-medium text-zinc-500">Salad</span>
        <button className="rounded-full bg-pink-600 px-5 py-2 font-semibold text-white hover:bg-pink-500">
          View recipe
        </button>
      </div>
    </article>
  )
}

export default RecipePreviewCard
