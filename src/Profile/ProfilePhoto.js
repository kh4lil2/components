import React from 'react'
import image from './img.jpg'
import '../App.css';
export default function ProfilePhoto() {
  return (
    <div>
      <img className='photo' src={image}></img>
    </div>
  )
}
