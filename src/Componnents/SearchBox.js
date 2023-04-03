import React from 'react'

export default function SearchBox({ setValue }) {
    return (
        <div className='pa2'>
            <input className='pa3 b-green bg-light-blue' type='search' placeholder='search' onChange={setValue} />
        </div>
    )
}
