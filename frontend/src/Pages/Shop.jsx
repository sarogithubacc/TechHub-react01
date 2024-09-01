import React from 'react'
import Slider from '../Components/Slider/Slider'
import Feature from '../Components/Feature/Feature'
import Popular from '../Components/Popular/Popular'
import Gallery from '../Components/Gallery/Gallery'
export default function Home() {
  return (
    <div>
      <Slider />
      <Popular />
      <Feature />
      <Gallery />
      
    </div>
  )
}
