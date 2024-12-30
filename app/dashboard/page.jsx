import Thumbnail from '@/components/Thumbnail'
import { Separator } from '@/components/UI/separator'
import { getCurrentUser } from '@/lib/actions/user.actions'
import Image from 'next/image'
import React from 'react'

const Dashboard = async() => {
  const currentUser = await getCurrentUser()

  return (
    <div className='flex flex-col lg:flex-row items-start justify-between w-full' >
      <div className='h-auto bg-red-200 w-[58vw]'>dashboard</div>

      <div className='h-auto w-[30vw] bg-white pt-6 rounded-2xl'>
        <div className='flex flex-col justify-center items-center  gap-4 pb-6'>
          <Thumbnail url={''} />
          <div className='flex flex-col gap-1 text-center'>
          <p className='font-bold text-xl'>{currentUser.fullName}</p>
          <p className='subtitle-2'>{currentUser.email}</p>
          </div>
        </div>
        <Separator className='bg-green-500 w-[80%] mx-10 mb-4' />
      </div>
    </div>
  )
}

export default Dashboard