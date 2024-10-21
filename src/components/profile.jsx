import React, {useContext} from 'react'
import usercontext from '..context/usercontext'

function profile() {
    const {user} = useContext(useContext)

    if (!user) return <div>please login</div>

    return <div>welcome {user.username}  </div>
  return (
    <div>profile</div>
  )
}

export default profile