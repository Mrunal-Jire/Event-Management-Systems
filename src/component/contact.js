import React from 'react'
import mycss from '../css/main.css'

export default function ContactUs() {
  return (
    <>
      <link rel="stylesheet" href={mycss} />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <section id="footer">
        <img src="images/footer-img.png" className="footer-img" />
        <div className="title-text mt-4">
          <p className="globfont-2">CONTACT</p>
          <h1 className="globfont-2">Visit Us Today</h1>
        </div>
        <div className="footer-row globfont-2">
          <div className="footer-left">
            <h1 className="globfont-2">Contact Us</h1>
            <p className="globfont-2"> 
              601/2/1648, Sai Krishna Resort, 
              Pimpalner,(Dhule) - 424306
              <i className="fa fa-map-marker" style={{ fontSize: '15px' }} />
            </p>
            <p className="globfont-2">
              saikrishnaresort2019@gmail.com
              <i className="fa fa-paper-plane" style={{ fontSize: '15px' }} />
            </p>
            <p className="globfont-2">
              7620745950
              <i className="fa fa-phone" style={{ fontSize: '15px' }} />
            </p>
          </div>
          <div className="footer-right">
            <h1 className="globfont-2">Get in Touch</h1>
            <form onSubmit={{}}>
              <div className="mb-3">
                <label className="globfont-2">Name : </label>
                <input
                  type="name"
                  placeholder="Enter full name"
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <label className="globfont-2">Email : </label>
                <input
                  type="email"
                  placeholder="abcd@gmail.com"
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <label className="globfont-2">Number : </label>
                <input
                  type="number"
                  placeholder="10 digit mob number"
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <label className="globfont-2">Subject : </label>
                <input
                  type="text"
                  placeholder="wedding, birthday, party,etc."
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <label className="globfont-2">Message : </label>
                <input
                  type="message"
                  placeholder="type here !!!"
                  style={{ width: '17vw', height: '15vh' }}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-info globfont-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="social-links">
          <i className="fa fa-twitter" style={{ fontSize: '15px' }} />
          <i className="fa fa-instagram" style={{ fontSize: '15px' }}/>
          <i className="fa fa-facebook" style={{ fontSize: '15px' }} />
          <i className="fa fa-youtube" style={{ fontSize: '15px' }} />
          <p className="globfont-2">Copyright 2022 - CDAC Nashik</p>
        </div>
      </section>
    </>
  )
}
