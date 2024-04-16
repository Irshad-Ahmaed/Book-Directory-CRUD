import React from 'react'
import '../App.css'


const UIDesign = () => {
  return (
    <>
        <button className='add-btn'>Add a book</button>

        <div className='main-container'>

            <div className='bookImg'>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOTXoS-u69irkBTEYXYTNaBhoLKZutMoIgeYlRdoUVv-NJuhkufS9JtTjklT4Hqxu0h0HHaLWahE2E8-H49_hTkG01w10houSDi5Qvgd97ItzmIzk97bfWGw' alt='#book' />
                {/* <img src='https://m.media-amazon.com/images/I/61z59rXXQxL.jpg' alt='#book' /> */}
            </div>

            <div className='detail-container'>
                <h3 className='title'>Book Title: <span> Jungle Book </span></h3>
            
                <div className='book-details'>

                    <div className='author'>
                        <h3>Author</h3>
                        <span>Author Name</span>
                    </div>

                    <div className='book-type'>
                        <h3>Book Type</h3>
                        <span>Novel</span>
                    </div>

                    <div className='no-of-pages'>
                        <h3>No of pages</h3>
                        <span>Novel</span>
                    </div>

                    <div className='rating' style={{margin:"0"}}>
                        <h3>Rating</h3>
                        <span>5/10</span>
                    </div>

                    <div className='custom-icon' style={{margin:"0 0px 0 25px"}}>
                        <span className='edit-icon'><i class="bi bi-pencil-square"></i></span>
                        <span className='delete-icon'><i class="bi bi-trash-fill"></i></span>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default UIDesign