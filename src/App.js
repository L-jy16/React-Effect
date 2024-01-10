import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sample01 from './page/Sample01'
import Sample02 from './page/Sample02'
import Sample03 from './page/Sample03'
import Sample04 from './page/Sample04'
import Sample05 from './page/Sample05'
import Sample06 from './page/Sample06'
import Sample07 from './page/Sample07'
import Sample08 from './page/Sample08'
import Sample09 from './page/Sample09'
import Sample10 from './page/Sample10'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './page/Home'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sample01' element={<Sample01 />} />
        <Route path='/sample02' element={<Sample02 />} />
        <Route path='/sample03' element={<Sample03 />} />
        <Route path='/sample04' element={<Sample04 />} />
        <Route path='/sample05' element={<Sample05 />} />
        <Route path='/sample06' element={<Sample06 />} />
        <Route path='/sample07' element={<Sample07 />} />
        <Route path='/sample08' element={<Sample08 />} />
        <Route path='/sample09' element={<Sample09 />} />
        <Route path='/sample10' element={<Sample10 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
