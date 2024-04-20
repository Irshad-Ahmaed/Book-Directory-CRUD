import React, { useState } from 'react'
import './createBook.css'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postBook, updateBook } from '../actions/postBok'

export const CreateBook = (id) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [bookType, setBookType] = useState('')
  const [noOfPages, setNoOfPages] = useState(Number)
  const [rating, setRating] = useState(Number)

  const handleSubmit =(e)=> {
    e.preventDefault()
    
    if (!name || !author || !bookType || !noOfPages || !rating) {
      alert("please fill all the required field")
    }

    if(!location.state?.id){
      dispatch(postBook({name, author, bookType, noOfPages, rating}, navigate))
    }
    else{
      dispatch(updateBook(location.state?.id, {name, author, bookType, noOfPages, rating}, navigate))
    }
  }

  
  
  return (
    <section>

      <div className='home-container' style={{margin:"0 0 20px 0"}}>
        {
          (location.pathname === '/displayBook') ?
          <Link to='/postBook' className='add-btn'>Add a book</Link>
          :
          <Link to='/displayBook' className='add-btn'>Show books</Link>
        }
      </div>
        
      <div className='form-div'>
        <form onSubmit={handleSubmit}>

          <label htmlFor='name'>
            <h4>Book Title:</h4>
            <input type='text' onChange={(e)=> {setName(e.target.value)}} placeholder='Ex: Jungle Book' name='name' id='name' />
          </label>

          <label htmlFor='author'>
            <h4>Author:</h4>
            <input type='text' onChange={(e)=> {setAuthor(e.target.value)}} placeholder='Ex: Rudyard Kipling' name='author' id='author' />
          </label>

          <label htmlFor='bookType'>
            <h4>Book Type:</h4>
            <input type='text' onChange={(e)=> {setBookType(e.target.value)}} placeholder='Ex: Novel' name='bookType' id='bookType' />
          </label>

          <label htmlFor='noOfPages'>
            <h4>No of pages:</h4>
            <input type='number' onChange={(e)=> {setNoOfPages(e.target.value)}} placeholder='Ex: 200' name='noOfPages' id='noOfPages' />
          </label>

          <label htmlFor='rating'>
            <h4>Rating:</h4>
            <input type='number' onChange={(e)=> {setRating(e.target.value)}} min="0" max="10" placeholder='Ex: rating 0-10' name='rating' id='rating' />
          </label>

          {
            !location.state?.id
            ?
            <button type='submit' className='submit-btn'>Post the book</button>
            :
            <button type='submit' className='submit-btn'>Update book</button>
          }
        </form>
      </div>
    </section>
  )
}

