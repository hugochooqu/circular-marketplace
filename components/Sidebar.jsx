"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Separator } from './UI/separator'

const Sidebar = ({fullName, email, role}) => {
    const pathname = usePathname()

  return (
    <aside className='sidebar'>
        <Link href='/dashboard' ><h1>LOGO</h1></Link>

        <nav className='sidebar-nav mt-12'>
            <ul className='flex flex-col flex-1 gap-6'>
                <li className={cn(
                  "sidebar-nav-item",
                  pathname === '/dashboard' && "shad-active"
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
                      <li className={cn(
                        "sidebar-nav-item",
                        pathname === '/dashboard/manage' && "shad-active"
                      )}><Link href='dashboard/manage'>Manage Donations</Link></li>
                    </>
                )}
            </ul>
        </nav>

        <Separator className="mb-24 bg-green-500" />
      <div className="sidebar-user-info ">
          {/* <Image src={avatarPlaceholderUrl} alt="avatar" width={24} height={24} className="sidebar-user-avatar" /> */}
          <div className="hidden lg:block">
            <p className='subtitle-2 capitalize'>{fullName}</p>
            <p className="caption">{email}</p>
          </div>
      </div>
    </aside>
  )
}

export default Sidebar