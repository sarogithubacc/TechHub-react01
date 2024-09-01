import React from 'react'
import './Gallery.css'
import img1 from '../Assets/pexeimg.jpg'
import img2 from '../Assets/pexels-harschshivam-2007647.jpg'
import img3 from '../Assets/pexels-athena-2582928.jpg'


export default function Gallery() {
  return (
    <div>
       <div className="gallery">
        <div className="galleryItem">
            <h1 className="galleryTitle">Everything in 4k</h1>
            <img src={img1}
                alt="" className="galleryImg" />
        </div>
        <div class="galleryItem">
            <img src={img2}
                alt="" className="galleryImg" />
            <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
        </div>
        <div className="galleryItem">
            <h1 className="galleryTitle">Just Do it!</h1>
            <img src={img3}
                alt="" className="galleryImg" />
        </div>
    </div>
    </div>
  )
}
