import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import mycss from './main.css'
import crimg1 from './images/frontW.jpg'
import crimg2 from './images/Social-event.jpg'
import crimg3 from './images/3.jpg'
import crimg4 from './images/yoga-2.jpg'
import crimg5 from './images/PA-23.jpg'
import crimg6 from './images/birthday-2.jpg'
import crimg7 from './images/Music-Concert.jpg'

export default function Home() {
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

      <meta name="viewport" content="width = device-width,initial-scale =1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@200&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
      {/* HOME PAGE / MAIN PAGE */}

      <section>
        <div style={{ marginTop: '80px' }}>
          <Carousel fade>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg1} alt="First slide" />
              <Carousel.Caption>
                <h3 className="globfont">Wedding Events</h3>
                <p className="globfont">
                  Marriage is a heavenly union of two souls, two families and
                  something even two diverse cultures. Two unique worlds ith
                  different storeies, set of beliefs and lifestyles coming
                  altogether.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg2} alt="Second slide" />
              <Carousel.Caption>
                <h3 className="globfont">Social Events</h3>
                <p className="globfont">
                  We create an auspicious memories for you!!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg4} alt="First slide" />
              <Carousel.Caption>
                <h3 className="globfont">Festivals</h3>
                <p className="globfont">
                  On the occasion of Festivals we colours your day in
                  unfogettable!!!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg5} alt="First slide" />
              <Carousel.Caption>
                <h3 className="globfont">Anniversaries</h3>
                <p className="globfont">
                  An Anniversary is a date which you remembered for celebrateed
                  because a special event happened on that date in previous
                  year.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg6} alt="First slide" />
              <Carousel.Caption>
                <h3 className="globfont">Birthday Celebrations</h3>
                <p className="globfont">
                  A Birthday means that you are a year older, but a Birthday
                  party means you get to act 10 years younger.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg7} alt="First slide" />
              <Carousel.Caption>
                <h3 className="globfont">Musical Concerts</h3>
                <p className="globfont">
                  Let's enjoy the live musical performance in front of an
                  audiance.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg3} alt="Third slide" />
              <Carousel.Caption>
                <h3 className="globfont">Corporate Events</h3>
                <p className="globfont">
                  Companies that invest more in digital transformation actually
                  outperform their peers over time..
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  )
}
