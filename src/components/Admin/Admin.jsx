import React from 'react'

const Admin = () => {

    // localStorage.setItem("login", "salom")

  return (
    <div>
        {
            localStorage.getItem("login") ? <p>Admin panel</p> : window.location.assign('/admin-login')
        }
    </div>
  )
}

export default Admin