import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

export const BookDisplay = () => {
    const bookList = useSelector(state => state.postReducer)
    console.log(bookList)
  return (
    <div className='main-container'>

        <div className='bookImg'>
            <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOTXoS-u69irkBTEYXYTNaBhoLKZutMoIgeYlRdoUVv-NJuhkufS9JtTjklT4Hqxu0h0HHaLWahE2E8-H49_hTkG01w10houSDi5Qvgd97ItzmIzk97bfWGw' alt='#book' />
            {/* <img src='https://m.media-amazon.com/images/I/61z59rXXQxL.jpg' alt='#book' /> */}
        </div>

        {
            bookList.data.map((book) => (
                <div className='detail-container'>
                    <h3 className='title'>Book Title: <span> {book.name} </span> </h3>
                    
                    <div className='book-details'>

                        <div className='author'>
                            <h3>Author</h3>
                            <span>{book.author}</span>
                        </div>

                        <div className='book-type'>
                            <h3>Book Type</h3>
                            <span>{book.bookType}</span>
                        </div>

                        <div className='no-of-pages'>
                            <h3>No of pages</h3>
                            <span>{book.noOfPages}</span>
                        </div>

                        <div className='rating' style={{margin:"0"}}>
                            <h3>Rating</h3>
                            <span>{book.rating}/10</span>
                        </div>

                        <div className='custom-icon' style={{margin:"0 0px 0 25px"}}>
                            <span className='edit-icon'><i className="bi bi-pencil-square"></i></span>
                            <span className='delete-icon'><i className="bi bi-trash-fill"></i></span>
                        </div>
                    </div>
                    
                    <span className='post'>Posted On: {moment(book.postedOn).fromNow()}</span>

                </div>
            ))
        }
    </div>
  )
}
