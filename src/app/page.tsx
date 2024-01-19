import Image from 'next/image'
import Header from './components/Header'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <main className="bg-white h-full">
      <Header/>
      <Carousel/>
    </main>
  )
}
