import { useState } from 'react'
import landingPageImage from './assets/LandingPage.png'
import Header from './components/Header'
import LoginModal from './components/LoginModal'
import RecipePreviewCard from './components/RecipePreviewCard'
import SearchResultsPage from './components/SearchResultsPage'
import RecipeBoxPage from './components/RecipeBoxPage'
import SubscriptionPage from './components/SubscriptionPage'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activePage, setActivePage] = useState('search')
  const [searchQuery, setSearchQuery] = useState('')

  const handleContinueLogin = () => {
    setIsLoggedIn(true)
    setIsLoginOpen(false)
    setActivePage('search')
  }

  const handleSearchResultsClick = (query) => {
    if (typeof query === 'string') {
      setSearchQuery(query)
    }
    setActivePage('search')
  }

  const renderContent = () => {
    if (activePage === 'subscription') {
      return <SubscriptionPage />
    }

    if (isLoggedIn) {
      if (activePage === 'recipeBox') {
        return <RecipeBoxPage />
      }
      return <SearchResultsPage query={searchQuery} />
    }

    return (
      <section className="h-[calc(100vh-56px)] w-full px-2 pb-2 pt-1">
        <div
          className="h-full w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 bg-cover bg-center bg-no-repeat px-6 pt-8"
          style={{ backgroundImage: `url(${landingPageImage})` }}
        >
          <div className="ml-[72px] mt-[68px]">
            <RecipePreviewCard />
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className={`relative bg-zinc-100 ${isLoggedIn || activePage === 'subscription' ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
      <Header
        onLoginClick={() => setIsLoginOpen(true)}
        onRecipeBoxClick={() => setActivePage('recipeBox')}
        onSearchResultsClick={handleSearchResultsClick}
        onRecipesClick={() => setActivePage('subscription')}
        isLoggedIn={isLoggedIn}
        isRecipeBoxPage={activePage === 'recipeBox'}
        searchValue={searchQuery}
        activePage={activePage}
      />

      {renderContent()}

      {isLoginOpen && (
        <LoginModal onClose={() => setIsLoginOpen(false)} onContinue={handleContinueLogin} />
      )}
    </main>
  )
}

export default App
