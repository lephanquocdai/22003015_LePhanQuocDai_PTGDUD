import { useState } from 'react'
import landingPageImage from './assets/LandingPage.png'
import Header from './components/Header'
import LoginModal from './components/LoginModal'
import RecipePreviewCard from './components/RecipePreviewCard'
import SearchResultsPage from './components/SearchResultsPage'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleContinueLogin = () => {
    setIsLoggedIn(true)
    setIsLoginOpen(false)
  }

  return (
    <main className={`relative bg-zinc-100 ${isLoggedIn ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
      <Header
        onLoginClick={() => setIsLoginOpen(true)}
        isLoggedIn={isLoggedIn}
        searchValue={isLoggedIn ? 'cakescascsa' : ''}
      />

      {isLoggedIn ? (
        <SearchResultsPage />
      ) : (
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
      )}

      {isLoginOpen && (
        <LoginModal onClose={() => setIsLoginOpen(false)} onContinue={handleContinueLogin} />
      )}
    </main>
  )
}

export default App
