import React from 'react'
import { ListProducts } from '../components/ListProducts'
import { HeroSeccion } from '../components/HeroSeccion'

export const Home = () => {
  return (
    <main>
        <HeroSeccion />
        <ListProducts />
    </main>
  )
}
