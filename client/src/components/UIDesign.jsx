import React from 'react'
import '../App.css'
import { Link, useLocation } from 'react-router-dom'

const UIDesign = () => {
    const location = useLocation()

  return (
    <div className='home-container'>
        {
            (location.pathname === '/postBook') ?
            <Link to='/displayBook' className='add-btn'>Show books</Link>
            :
            <>
                {
                    (location.pathname === '/displayBook') ?
                    <Link to='/postBook' className='add-btn'>Add a book</Link>
                    :
                    <Link to='/displayBook' className='add-btn'>Show books</Link>
                }
            </>
        }
    </div>
  )
}

export default UIDesign