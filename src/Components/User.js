import React from 'react'
import './User.css';


function User({name,id, username, email}) {

  return (
    <div >
          <div className='user-container'>
          <p className='name'>Teljes név:{name}</p>
          <p>Id:{id}</p>
          <p>Név:{username}</p>
          <p>Email:{email}</p>
          </div>
        
    </div>
  )
}

export default User