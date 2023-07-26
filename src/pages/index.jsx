import JoinFestVerse from '@/components/JoinFestVerse'
import React from 'react'
import Navbar from '@/components/Landing/Navbar'
import Hero from '@/components/Landing/Hero'
import FestsBanner from '@/components/Landing/FestsBanner'


const index = () => {
  return (
    <div>
      <Navbar />
      <JoinFestVerse />
      <Hero />
      <FestsBanner />
      <AuthWrapper />
    </div>
  )
}

export default index