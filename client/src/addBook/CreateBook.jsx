import React, { useState } from 'react'
import './createBook.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const CreateBook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [bookType, setBookType] = useState('')
  const [noOfPages, setNoOfPages] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit =(e)=> {
    e.preventDefault()

    if (!name || !author || !bookType || !noOfPages || !rating) {
      alert("please fill all the required field")
    }
    else{
      dispatch({name, author, bookType, noOfPages, rating}, navigate)
    }
    // alert("Book added successfully")
    // navigate('/')
    // window.location.reload();
  }
  
  return (
    <section>
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

          <button type='submit' className='submit-btn'>Post the book</button>
        </form>
      </div>
    </section>
  )
}

