import React from 'react'
import loading from '../loading.gif'
export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={loading}   alt='loading' Style="width:100px; height:100px;"></img>
    </div>
  )
}
