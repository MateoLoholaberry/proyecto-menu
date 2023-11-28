import React from 'react'
import { Navbar } from './components/navBar/Navbar'
import { Hero } from './components/hero/Hero'
import { Category } from './components/categoryList/Category'

export const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Category />
    </>
  )
}
