import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <React.Fragment>
    {
      user ?  <Outlet/> : <Navigate to='/login'/>
    }  
    </React.Fragment>
  )
}

export default PrivateRouter