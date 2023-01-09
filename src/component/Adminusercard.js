import React from 'react'
import base_url from '../api/bootapi'
import swal from 'sweetalert2'
import axios from 'axios'

function Adminusercard({ user }) {
  const deleteUser = () => {
    axios.delete(`${base_url}/deleteuser/${user.email}`).then(
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
        title: 'Are you sure you want to delete this user?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteUser()
          swal
            .fire('Deleted!', 'User has been Deleted', 'success')
            .then(function () {
              window.location = '/adminusers'
            })
        }
      })
  }

  return (
    <tr>
      <td className="admfont">{user.name}</td>
      <td className="admfont">{user.city}</td>
      <td className="admfont">{user.phone}</td>
      <td className="admfont">{user.email}</td>
      <td className="admfont">{user.password}</td>
      <td className="admfont">{user.securityQues}</td>
      <td className="admfont">{user.securityAns}</td>
      <td className="admfont">{user.admin == true ? 'Yes' : 'No'}</td>
      <td className="admfont">
        <button
          type="button"
          className="btn btn-outline-danger btn-sm badge-pill"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Adminusercard
