import Image from 'next/image'
import Header from './components/header'
import Carousel from './components/carousel'

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Carousel/>
    </main>
  )
}
