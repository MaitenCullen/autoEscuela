import Image from 'next/image'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Services from './pages/Services'

export default function Home() {
  return (
    <main className="bg-white h-full w-full">
      <Header/>
      <Carousel/>
      <Services/>
    </main>
  )
}
