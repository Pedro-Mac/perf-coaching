import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({user, ...props }) => {
  if(!user){
    return <Route {...props} />
  } else if (user.role === 'admin') {
    return <Redirect to='/admin'/>
  } else {
    return <Redirect to={`/user/${user._id}`} />
  }
}

export default ProtectedRoute;
