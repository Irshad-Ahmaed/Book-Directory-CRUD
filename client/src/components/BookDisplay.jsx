import React, { useEffect } from 'react'
import '../App.css'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { deleteBook, fetchAllBooks } from '../actions/postBok'

export const BookDisplay = () => {

    const bookList = useSelector(state => state.postReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        dispatch(fetchAllBooks())
    }, [dispatch])

    const handleDelete =(id)=>{
        dispatch(deleteBook(id, navigate))
    }

    const handleUpdate =(id, name, author, type, pages, rating)=>{
        navigate('/postBook', {state:{id, name, author, type, pages, rating}})
    }
    

  return (

    <div className='main-container'>

        <div className='home-container'>
            {
                (location.pathname === '/postBook') ?
                <Link to='/displayBook' className='add-btn'>Show books</Link>
                :
                <>
                    {
                        (location.pathname === '/displayBook') ?
                        <Link to='/postBook' style={{margin:"0 0 0 15px"}} className='add-btn'>Add a book</Link>
                        :
                        <Link to='/displayBook' className='add-btn'>Show books</Link>
                    }
                </>
            }
        </div>

        {
            bookList.data === null
            ?
            <h2 style={{textAlign:"center", margin:"50px 0"}}>No Data Available...</h2>
            :
            bookList.data.map((book, i) => (
                <div className='detail-container' key={i}>
                    <div className='bookImg'>
                        <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOTXoS-u69irkBTEYXYTNaBhoLKZutMoIgeYlRdoUVv-NJuhkufS9JtTjklT4Hqxu0h0HHaLWahE2E8-H49_hTkG01w10houSDi5Qvgd97ItzmIzk97bfWGw' alt='#book' />
                        {/* <img src='https://m.media-amazon.com/images/I/61z59rXXQxL.jpg' alt='#book' /> */}
                    </div>
                    
                    <div className='book-ticket'>
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
                                <span className='edit-icon'><i onClick={() => handleUpdate(book._id, book.name, book.author, book.bookType, book.noOfPages, book.rating)} className="bi bi-pencil-square"></i></span>
                                <span className='delete-icon'><i onClick={() => handleDelete(book._id)} className="bi bi-trash-fill"></i></span>
                            </div>
                        </div>
                        
                        <span className='post'>Posted On: {moment(book.postedOn).fromNow()}</span>
                    </div>

                </div>
                
            ))
        }
    </div>
  )
}
