import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <h1 className='text-red-500 text-left'>Netflix from Wish</h1>
          <nav>
            <a href="">Categories</a>
            <a href="">Bookmarks</a>
          </nav>
        </header>
        <section>
          <section>
            <h1>Trending</h1>
          </section>
          <section>
            <h1>Recommended</h1>
          </section>
          <section>
            <h1>Bookmarks</h1>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
