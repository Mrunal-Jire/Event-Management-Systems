import { Dialog, DialogContent, DialogTitle, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import base_url from '../api/bootapi'
import invcss from '../css/invoice.css'
// import logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom'

export default function Invoice(props) {
  useEffect(() => {
    viewAllPricing()
  }, [])
  const {
    bdata,
    bname,
    bemail,
    bcity,
    bevent,
    bguest,
    bfood,
    bequipment,
    children,
    openPop,
    setOpenPop,
  } = props

  // const {}
  const [dbPriceData, setDBPricedata] = useState([])
  // const [udata, setUdata] = useState([])

  const viewAllPricing = () => {
    axios.get(`${base_url}/pricing`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: 'Pricing Table',
            text: 'There are no records of price',
            icon: 'error',
            button: 'Ok',
          })
        }
        setDBPricedata(response.data)
      },
      (error) => {
        console.log(error)
        swal.fire({
          icon: 'error',
          title: 'Oh no!',
          text: 'Server is down',
        })
      },
    )
  }

  const bookData = {
    event: bevent,
    guest: bguest,
    food: bfood,
    equipment: bequipment,
  }

  // Food value and price bfood=  'Lunch,Dinner'
  const foodArr = bookData.food.split(',') //=>['Lunch','dinner']
  let foodPrice = 0
  foodArr.forEach((el) => {
    for (var i = 0; i < dbPriceData.length; i += 1) {
      if (dbPriceData[i].items === el) {
        // console.log(
        //   dbPriceData[i].items + ' its price is = ' + dbPriceData[i].price,
        // )
        foodPrice = foodPrice + dbPriceData[i].price * bookData.guest
       // console.log(foodPrice)
      }
    }
  })

  const equiArr = bookData.equipment.split(',') //=>['DJ','Orchestra']
  let equiPrice = 0
  equiArr.forEach((el) => {
    for (var i = 0; i < dbPriceData.length; i += 1) {
      if (dbPriceData[i].items === el) {
        equiPrice = equiPrice + dbPriceData[i].price
      }
    }
  })

  //Event
  var eventPrice
  for (var i = 0; i < dbPriceData.length; i += 1) {
    if (dbPriceData[i].items === bookData.event) {
      eventPrice = dbPriceData[i].price
    }
  }

  const insertRequest = (data) => {
    axios
      .post(`${base_url}/booking`, data)
      .then
      // (response) => {
      //   if (response.data.length == 0) {
      //     swal.fire({
      //       title: 'Pricing Table',
      //       text: 'There are no records of price',
      //       icon: 'error',
      //       button: 'Ok',
      //     })
      //   }
      // },
      ()
  }

  const handleCancle = () => {
    setOpenPop(false)
  }

  const handleBooking = () => {
    insertRequest(bdata)
    window.location = '/view'
  }

  const total = eventPrice + equiPrice + foodPrice
  const discount = 10
  const toPay = total - (total * 10) / 100

const[daten,setDaten]=useState('');;
function DateFor (){
 daten = new Date();
 setDaten(daten);
};

  return (
    <>
      <Dialog open={openPop} className="container-fluid">
        <DialogContent>
          {' '}
          <div>
            <div> 
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
              />
              <link rel="stylesheet" href={invcss} />
              <title>WelcomeHome</title>
              <div className="container-fluid">
                <div className="row">
                  <div className="text-right">
                    <button
                      onClick={() => {
                        setOpenPop(false)
                      }}
                      className="btn btn-danger ps-3 pe-3 mb-2 "
                    >
                      {' '}
                      X{' '}
                    </button>
                  </div>
                  <div className=" body-main">
                    <div className="col-md-12">
                      <div className="row">
                        {/* <div className="col-md-4"> <img className="img" alt="Invoice Template" src={logo} /> </div> */}
                        <div className="col-md-8 text-right">
                          <h4 className="text-primary">
                            <i>Sai Krishna Resort</i>
                          </h4>
                          <p>601/2/1648, Sai Krishna Resort, Pimpalner,(Dhule) - 424306</p>
                          <p>+91-7620745950</p>
                          <p>saikrishnaresort2019@gmail.com</p>
                        </div>
                      </div>{' '}
                      <br />
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <h2>INVOICE</h2>
                          <h5>Autogenerated</h5>
                         
                        </div>
                      </div>{' '}
                      <br />
                      <div>
                        <table className="table">
                          <thead>
                            <tr>
                              <th>
                                <h5>Sr.No.</h5>
                              </th>
                              <th>
                                <h5>Description</h5>
                              </th>
                              <th>
                                <h5>Amount</h5>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="col-md-1">1</td>
                              <td className="col-md-8">{bookData.event} </td>
                              <td className="col-md-3">
                                <i
                                  className="fas fa-rupee-sign"
                                  area-hidden="true"
                                />
                                {eventPrice}
                              </td>
                            </tr>
                            <tr>
                              <td className="col-md-1">1</td>
                              <td className="col-md-8">{bookData.food} </td>
                              <td className="col-md-3">
                                <i
                                  className="fas fa-rupee-sign"
                                  area-hidden="true"
                                />
                                {foodPrice}
                              </td>
                            </tr>
                            <tr>
                              <td className="col-md-1">1</td>
                              <td className="col-md-8">
                                {bookData.equipment}{' '}
                              </td>
                              <td className="col-md-3">
                                <i
                                  className="fas fa-rupee-sign"
                                  area-hidden="true"
                                />
                                {equiPrice}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right">
                                <p> </p>
                                <p> </p>
                                <p> </p>
                                <p> </p>
                              </td>
                              <td className="text-right">
                                <p>
                                  {' '}
                                  <strong>Total Amount: </strong>{' '}
                                </p>
                                <p>
                                  {' '}
                                  <strong>Discount: </strong>{' '}
                                </p>
                                <p>
                                  {' '}
                                  <strong>Payable Amount: </strong>{' '}
                                </p>
                              </td>
                              <td>
                                <p>
                                  {' '}
                                  <strong>
                                    <i
                                      className="fas fa-rupee-sign"
                                      area-hidden="true"
                                    />
                                    {total}{' '}
                                  </strong>{' '}
                                </p>
                                <p>
                                  {' '}
                                  <strong>
                                    <i
                                      className="fas fa-rupee-sign"
                                      area-hidden="true"
                                    />{' '}
                                    {discount} %
                                  </strong>{' '}
                                </p>
                                <p>
                                  {' '}
                                  <strong>
                                    <i
                                      className="fas fa-rupee-sign"
                                      area-hidden="true"
                                    />{' '}
                                    {toPay}
                                  </strong>{' '}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-right">
                                <h4></h4>
                              </td>
                              <td className="text-right">
                                <h4>
                                  <strong>Total:</strong>
                                </h4>
                              </td>
                              <td className="text-left text-primary">
                                <h4>
                                  <strong>
                                    <i
                                      className="fas fa-rupee-sign"
                                      area-hidden="true"
                                    />{' '}
                                    {toPay}
                                  </strong>
                                </h4>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <div className="col-md-12">
                          <p>
                            <b>Date : {daten} </b>
                          </p>
                          <br />
                          <p>
                            <b>Signature</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <input
                type="button"
                value="Pay now & Confirm Booking"
                className="btn btn-success ps-2 pe-3 p-1 m-3"
                onClick={handleBooking}
              />
              <input
                type="button"
                value="Cancel"
                className="btn btn-primary  ps-2 pe-3 p-1 m-3"
                onClick={handleCancle}
              />
            </div>
          

          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
