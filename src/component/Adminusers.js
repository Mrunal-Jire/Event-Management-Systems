import React, { useEffect, useState } from 'react'
import Adminusercard from './Adminusercard'
import base_url from '../api/bootapi'
import swal from 'sweetalert2'
import axios from 'axios'
import mycss from './main.css'

function Adminusers() {
  useEffect(() => {
    document.title = 'Users List'
    if (sessionStorage.getItem('admin') != 'admin') {
      window.location = '/'
    }
    viewUsers()
  }, [])

  const viewUsers = () => {
    axios.get(`${base_url}/getallusers`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: 'Admin',
            text: 'There are no users registered',
            icon: 'error',
            button: 'Ok',
          })
        }
        setUsers(response.data)
      },
      (error) => {
        console.log(error)
        swal.fire('Server is down')
      },
    )
  }

  const [users, setUsers] = useState([])

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <link rel="stylesheet" href={mycss} />
      <div className="container mt-5 pt-5">
        <h1 className=" mb-3 text-center fw-bold myfontAdm1">View All Users</h1>
        <div>
          <div>
            <table
              className="text-center table-sm table table-hover table-striped table-bordered table-info m-auto mt-5"
              style={{ width: '90%' }}
            >
              <thead>
                <tr>
                  <th className="fs-3 myfontAdm" scope="col">
                    Name
                  </th>
                  <th className="fs-3 myfontAdm" scope="col">
                    City
                  </th>
                  <th className="fs-3 myfontAdm" scope="col">
                    Phone
                  </th>
                  <th className="fs-3 myfontAdm" scope="col">
                    E-mail
                  </th>
                  <th className="fs-3 myfontAdm" scope="col">
                    Password
                  </th>
                  <th
                    className="text-center fs-3 myfontAdm ps-3 pe-3"
                    scope="col"
                  >
                    Security Question
                  </th>
                  <th className="fs-3 myfontAdm" scope="col">
                    Answer
                  </th>
                  <th className="fs-3 myfontAdm" scope="col">
                    Admin
                  </th>
                  <th className="fs-3 myfontAdm" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="fs-5 admfont">
                {users.length > 0 ? (
                  users.map((item) => <Adminusercard user={item} />)
                ) : (
                  <h2 className="text-center m-5 p-5">No users registered</h2>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminusers
