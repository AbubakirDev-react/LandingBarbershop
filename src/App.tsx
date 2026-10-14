import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Location } from './components/Location'
import { Prices } from './components/Prices'
import { Reviews } from './components/Reviews'
import { Works } from './components/Works'
import { contacts, prices, reviews, works } from './data'

function App() {
  return (
    <>
      <Header contacts={contacts} />
      <main>
        <Prices groups={prices} />
        <Works items={works} />
        <Reviews items={reviews} />
        <Location contacts={contacts} />
      </main>
      <Footer contacts={contacts} />
    </>
  )
}

export default App
