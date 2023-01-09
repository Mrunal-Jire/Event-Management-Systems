import React from 'react'

function Admincolcard({ request }) {
  return (
    <tr>
      <td className="admfont">bookingId {request.bookingId}</td>
      <td className="admfont">{request.name}</td>
      <td className="admfont">{request.email}</td>
      <td className="admfont">{request.event}</td>
      <td className="admfont">{request.city}</td>
      <td className="admfont">{request.date}</td>
    </tr>
  )
}

export default Admincolcard
