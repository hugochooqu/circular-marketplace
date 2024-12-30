'use client'

import { signOutUser } from '@/lib/actions/user.actions'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBell, FaCog, FaLongArrowAltLeft, FaSignOutAlt } from 'react-icons/fa'
import {SignOut} from './SignOut'

const DashboardHeader = ({role}) => {

    const pathname = usePathname()
  return (
    <div className='w-full h-[60px] bg-green-500 items-center justify-between flex flex-row'>
        <h1 className='mx-7 my-4'>Logo</h1>
         <nav className='sidebar-nav'>
            <ul className='flex flex-row '>
                <li className={cn(
                  "sidebar-nav-item",
                  pathname === '/dashboard' && ""
                )}><Link href='/dashboard'>Dashboard</Link></li>

                {role === 'individual' && (
                    <li className={cn(
                        "sidebar-nav-item",
                        pathname === '/dashboard/browse' && "shad-active"
                      )}><Link href='dashboard/browse'>Browse Donations</Link></li>
                )} 

                {role === 'ngo' && (
                    <>
                    <li className={cn(
                        "sidebar-nav-item",
                        pathname === '/dashboard/post' && "shad-active"
                      )}><Link href='dashboard/post'>Post Donations</Link></li>
                      
                    </>
                )}
                <li className={cn(
                        "sidebar-nav-item",
                        pathname === '/dashboard/manage' && "shad-active"
                      )}><Link href='dashboard/manage'>Manage {role === 'individual' ? 'Requests' : 'Donations'}</Link></li>
            </ul>
        </nav>
        <div className='flex flex-row gap-12 mr-10 justify-between'>
            search
            <FaBell size='22px'/>
            <Link href='/dashboard/settings'><FaCog size='22px' /></Link>
            
            <SignOut />
        </div>
    </div>
  )
}

export default DashboardHeader