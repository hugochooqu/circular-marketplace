import DashboardHeader from '@/components/DashboardHeader'
import Sidebar from '@/components/Sidebar'
import { getCurrentUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async({children}) => {
    const currentUser = await getCurrentUser()

    if (!currentUser) return redirect('/sign-in')

  return (
   <main className='flex h-screen'>
    {/* <Sidebar {...currentUser}  /> */}
    <section className='flex h-full flex-1 flex-col '>
        {/* <div>Mobile nav</div> */}
        <DashboardHeader {...currentUser} />
        <div className='main-content ml-7 mt-6'>{children}</div>
    </section>
   </main>
  )
}

export default layout