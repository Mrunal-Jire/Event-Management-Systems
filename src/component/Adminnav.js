import React from 'react'
import mycss from './main.css'
import { Link } from 'react-router-dom'

function Adminnav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem('admin')
    window.location = '/'
  }
  return (
    <div className="position: fixed">
      <link rel="stylesheet" href={mycss} />
      <nav className=" fixed-top mynav text-danger bg-info">
        <div className="row nav d-flex">
          <div className="col-lg-3 col-md-2 ms-4 me-5 navhead">
            <Link to="/admin" className="col a1 text-warning">
             Sai Krishna Resort:- Admin
            </Link>
          </div>
          <div className="col-lg-2 col-md-1 col-lg-1 ms-2">
            <Link to="/viewpendingbookings" className="col a1 text-info">
              Pending Bookings
            </Link>
          </div>
          <div className="col-lg-2 col-md-1 col-lg-1 ms-1">
            <Link to="/adminview" className="nav-link text-info">
              View Bookings
            </Link>
          </div>

          <div className="col-lg-2 col-md-1 col-lg-1 me-1 ms-1">
            <Link to="/adminusers" className="nav-link text-info">
              View Users
            </Link>
          </div>
          <div className="col-lg-1 col-md-1 col-lg-1 me-1">
            <Link to="/pricing" className="nav-link text-info">
              Pricing
            </Link>
          </div>
          <div className="col-lg-1 col-md-1 col-lg-1 ms-2">
            <form action="/">
              <button
                type="submit"
                onClick={logoutAdmin}
                className="btn btn-danger ps-3 pe-3 p-2"
              >
                <span className="fs-6 form-label">Logout</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Adminnav
