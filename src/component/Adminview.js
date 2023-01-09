import React, { useEffect, useState } from 'react'
import mycss from './main.css'
import base_url from '../api/bootapi'
import axios from 'axios'
import Admincolcard from './Admincolcard'
import swal from 'sweetalert2'

function Adminview() {
  useEffect(() => {
    document.title = 'View Bookings'
    if (sessionStorage.getItem('admin') != 'admin') {
      window.location = '/'
    }
    viewBookings()
  }, [])

  const viewBookings = () => {
    axios.get(`${base_url}/viewBookings`).then(   
      (response) => {
        console.log(response)
        setRequests(response.data)
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
  const [requests, setRequests] = useState([])
  console.log(requests)
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <link rel="stylesheet" href={mycss} />
      <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center fw-bold mb-3 myfontAdm1">Bookings</h1>
        <div>
          <table
            className="text-center table table-hover table-striped table-bordered table-info m-auto mt-5"
            style={{ width: '90%' }}
          >
            <thead className="fs-3 myfontAdm">
              <tr className="myfontAdm">
                <th className="myfontAdm" scope="col">
                  Booking ID
                </th>
                <th className="myfontAdm" scope="col">
                  Name
                </th>
                <th className="myfontAdm" scope="col">
                  Email ID
                </th>
                <th className="myfontAdm" scope="col">
                  Events
                </th>
                <th className="myfontAdm" scope="col">
                  Venue
                </th>
                <th className="myfontAdm" scope="col">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="fs-5">
              {requests.length > 0 ? (
                requests.map((item) => <Admincolcard request={item} />)
              ) : (
                <h2 className="text-center m-5 p-5">No Booking </h2>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Adminview
