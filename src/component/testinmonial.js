import React from 'react'
import mycss from './main.css'
import shital from './images/shital.jpg'
// import { Link } from 'react-router-dom'
import mrunal from "./images/mrunal.jpeg"
import gaurav from "./images/gaurav.jpeg"
import chetana from "./images/chetana.jpg"

export default function Testimonial() {
  return (
    <>
      <link rel="stylesheet" href={mycss} />
      {/* Testimonial */}
      <section id="testimonial" style={{ marginTop: '60px' }}>
        <div className="title-text globfont">
          <p className="globfont">TESTMONIAL</p>
          <h1 className="globfont">Our Clients</h1>
        </div>
        <div className="testimonial-rows">
          <div className="testimonial-col">
            <div className="user">
              <img src={chetana} />
              <div className="user-info">
                <h4>
                  Chetana Mandage{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />{' '}
                </h4>
                <small>@chetanamandage</small>
              </div>
            </div>
            <div>
              <p>
              Event Plannert has completely streamlined our process of fielding 
              reservation inquiries, booking events and invoicing customers.
              The website has everything we need with
              tremendous ease of access and excellent customer service!!!
              </p>
            </div>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src={shital} />
              <div className="user-info">
                <h4>
                  Shital Lakare
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />
                </h4>
                <small>@shitallakare</small>
              </div>
            </div>
            <div>
              <p>
              Event Planner is helpful to me with my planning to keep things organized in one place.
              The events I plan are company sales meetings, and being able to keep all contracts, 
              floor plans, venue information all in one place is a lifesaver.
              </p>
            </div>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src={mrunal}/>
              <div className="user-info">
                <h4>
                  Mrunal Jire{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />
                </h4>
                <small>@mrunaljire</small>
              </div>
            </div>
            <div>
              <p>
              I have truly enjoyed using Planning Pod to keep my event details in
               one central location, which definitely makes it easier for me to stay on 
               track while planning events. 
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-rows">
          <div className="testimonial-col">
            <div className="user">
              <img src={gaurav} />
              <div className="user-info">
                <h4>
                  Gaurav Kakade{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />{' '}
                </h4>
                <small>@gauravkakade</small>
              </div>
            </div>
            <div>
              <p>
              Helps to reduce time with templates and lists pre-created.
              Has saved me tons of time managing timelines!!!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
