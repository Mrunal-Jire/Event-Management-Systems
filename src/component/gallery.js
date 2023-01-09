import React from 'react'
import mycss from '../css/main.css'
import galcss from './gallery.css'
import glvid8 from './videos/lawn-drone.mp4'
import glvid9 from './videos/only-hall.mp4'
import glvid10 from './videos/Dining.mp4'
import glvid12 from './videos/Dj.mp4'

export default function Gallery() {
  return (
    <div>
      <link rel="stylesheet" href={mycss} />
      <link rel="stylesheet" href={galcss} />

      {/* Gallery images */}
      <section id="services">
        <div className="title-text mt-5 pt-3">
          <p>GALLERY</p>
          <h1>Some of Our Wonderful Events</h1>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid8} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid10} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid12} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid9} type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  )
}
