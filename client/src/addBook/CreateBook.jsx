import React from 'react'
import './createBook.css'
import { useNavigate } from 'react-router-dom'

export const CreateBook = () => {
  const navigate = useNavigate()

  const handleSubmit =()=> {
    alert("Book added successfully")
    navigate('/')
    window.location.reload();
  }
  
  return (
    <section>
      <div className='form-div'>
        <form onSubmit={handleSubmit}>

          <label htmlFor='name'>
            <h4>Book Title:</h4>
            <input type='text' placeholder='Ex: Jungle Book' name='name' id='name' />
          </label>

          <label htmlFor='author'>
            <h4>Author:</h4>
            <input type='text' placeholder='Ex: Rudyard Kipling' name='author' id='author' />
          </label>

          <label htmlFor='bookType'>
            <h4>Book Type:</h4>
            <input type='text' placeholder='Ex: Novel' name='bookType' id='bookType' />
          </label>

          <label htmlFor='No of pages'>
            <h4>No of pages:</h4>
            <input type='number' placeholder='Ex: 200' name='No of pages' id='No of pages' />
          </label>

          <label htmlFor='rating'>
            <h4>Rating out of 10:</h4>
            <input type='number' min="0" max="10" placeholder='Ex: 5' name='rating' id='rating' />
          </label>

          <button type='submit' className='submit-btn'>Post the book</button>
        </form>
      </div>
    </section>
  )
}

