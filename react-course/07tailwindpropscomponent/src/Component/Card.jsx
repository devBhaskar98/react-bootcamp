import React from 'react'

// function Card(props) {
function Card({username = " Default Name "}) {
    return (
        <div>
            <img src="" alt="Photo link is missing" />
            <h1 className='text-2xl bg-green-500 p-3 rounded'> A rounded card for {username} photo</h1>
            <p>LOrem Ispum</p>    
        </div>
    )
}

export default Card
