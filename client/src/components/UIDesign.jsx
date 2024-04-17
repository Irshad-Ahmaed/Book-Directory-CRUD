import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const UIDesign = () => {

    const [toggle, setToggle] = useState(true)
    const [addToggle, setAddToggle] = useState(true)

    const handleToggle =()=>{
        setToggle(false)
        setAddToggle(true)
    }

    const addHandleToggle =()=>{
        setAddToggle(false)
        setToggle(true)
    }

  return (
    <div className='home-container'>
        {
            toggle && 
            <Link to='/displayBook' onClick={handleToggle} className='add-btn'>Show books</Link>
        }

        {
            addToggle && 
            <Link to='/postBook' onClick={addHandleToggle} className='add-btn'>Add a book</Link>
        }
    </div>
  )
}

export default UIDesign