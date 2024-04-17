import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { BookDisplay } from './components/BookDisplay';
import { CreateBook } from './addBook/CreateBook';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/displayBook' element={<BookDisplay />} />
        <Route path='/postBook' element={<CreateBook />}/>
    </Routes>
  )
}

export default AllRoutes