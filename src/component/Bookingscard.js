import React from 'react'

const Bookingscard = ({ request }) => {
  return (
    <tr>
      <td className="admfont">booking_{request.bookingId}</td>
      <td className="admfont">{request.name}</td>
      <td className="admfont">{request.event}</td>

      <td className="admfont">{request.date}</td>
      <td className="admfont">{request.guest}</td>
      <td className="admfont">{request.city}</td>
    </tr>
  )
}

export default Bookingscard
