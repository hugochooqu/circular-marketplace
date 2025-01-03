import Profile from '@/components/Profile';
import { getCurrentUser } from '@/lib/actions/user.actions';
import React from 'react'

const page = async({params}) => {
    
    const type = ((await params)?.type) || '';

    const currentUser = await getCurrentUser()
  return (
    <div>
      {type === 'profile' && <Profile user={currentUser} />}
      {type === 'browse' && <p>browse</p>}
      {type === 'post' && <p>post</p>}
      {type === 'manage' && <p>manage</p>}
      {type === 'settings' && <p>settings</p>}
    </div>
  )
}

export default page