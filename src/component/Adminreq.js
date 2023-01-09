import React, { useEffect, useState } from 'react'
import Admincard from './Admincard'
import base_url from '../api/bootapi'
import swal from 'sweetalert2'
import axios from 'axios'
import mycss from './main.css'

function Adminreq() {
  useEffect(() => {
    document.title = 'View bookings'
    if (sessionStorage.getItem('admin') != 'admin') {
      window.location = '/'
    }
    viewAllRequests()
  }, [])

  const viewAllRequests = () => {
    axios.get(`${base_url}/viewallpendingbookings`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: 'Admin',
            text: 'There are no requests',
            icon: 'error',
            button: 'Ok',
          })
        }
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

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <link rel="stylesheet" href={mycss} />
      <hr></hr>
      <div className="container-fluid mt-5 pt-5">
        <h1 className="mb-3 text-center fw-bold myfontAdm1">
          View Pending Bookings
        </h1>
        <table
          className="text-center table table-striped table-hover table-bordered table-info mt-5 m-auto"
          style={{ width: '90%' }}
        >
          <thead className="fs-3">
            <tr className="fs-3">
              <th className="fs-3 myfontAdm" scope="col">
                Booking ID
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Name
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Event
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Date
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Venue
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Food
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Equipment
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Guests
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Book
              </th>
              <th className="fs-3 myfontAdm" scope="col">
                Reject
              </th>
            </tr>
          </thead>
          <tbody className="fs-5 admfont">
            {requests.length > 0 ? (
              requests.map((item) => <Admincard request={item} />)
            ) : (
              <h2 className="text-center m-1 p-5 fs-4">No booking cards</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Adminreq
