import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { BookDisplay } from './components/BookDisplay';
import { CreateBook } from './addBook/CreateBook';
import UIDesign from './components/UIDesign';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<UIDesign/>} />
      <Route path='/displayBook' element={<BookDisplay />} />
      <Route path='/postBook' element={<CreateBook/>} />
    </Routes>
  )
}

export default AllRoutes