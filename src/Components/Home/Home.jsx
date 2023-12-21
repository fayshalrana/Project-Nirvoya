import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import FlashDeal from './Flash-Deal/FlashDeal'
import Featured from './Features/Featured'
import Benifite from './Benifite/Benifite'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <FlashDeal></FlashDeal>
      <Featured></Featured>
      <Benifite></Benifite>
    </div>
  )
}

export default Home
