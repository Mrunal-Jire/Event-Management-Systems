import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import base_url from '../api/bootapi'

function Admincard({ request }) {
  const [confirm, setConfirm] = useState({
    bookingId: request.bookingId,
    name: request.name,
    email: request.email,
    event: request.event,
    date: request.date,
    guest: request.guest,
    city: request.city,
    food: request.food,
    equipment: request.equipment,
    status: true,
  })

  const collectedBookings = (data) => {
    axios.put(`${base_url}/requests`, data).then(
      (response) => {},
      (error) => {
        console.log(error)
      },
    )
  }

  const handleForm = () => {
    swal
      .fire({
        title: 'Hey Admin',
        text: 'Are you sure you want to confirm Booking?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          collectedBookings(confirm)
          axios.post(`${base_url}/mailsend`, confirm).then((response) =>{ swal.fire('Hurreh, We have taken the Bookings please check your mail for further details').then(function () {
        
            window.location = '/admin'
          })});
         
        }
      })
  }
  const deleteRequest = () => {
    axios.delete(`${base_url}/bookings/${request.bookingId}`).then(
      (response) => {
        //console.log(response);
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

  const handleDelete = () => {
    swal
      .fire({
        title: 'Are you sure you want to delete this request?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest()
          swal
            .fire('Deleted!', 'booking has been Deleted', 'success')
            .then(function () {
              window.location = '/admin'
            })
        }
      })
  }
  return (
    <tr>
      <td className="admfont">bookingId {request.bookingId}</td>
      <td className="admfont">{request.name}</td>
      <td className="admfont">{request.event}</td>
      <td className="admfont">{request.date}</td>
      <td className="admfont">{request.city}</td>
      <td className="admfont">{request.food}</td>
      <td className="admfont">{request.equipment}</td>
      <td className="admfont">{request.guest}</td>
      <td>
        <button
          className="btn btn-primary ps-3 pe-3 p-2 admfont"
          onClick={handleForm}
        >
          Approve
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger ps-3 pe-3 p-2 admfont"
          onClick={handleDelete}
        >
          Reject
        </button>
      </td>
    </tr>
  )
}

export default Admincard
