import React from 'react'
import Link from "next/link"
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options';
const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className = "bg-gray-400">
        <nav className = "flex items-center justify-between w-full px-10 py-4">
         <div> My Site</div>
         <div className = "flex gap-10">
          <Link href = "/">Home</Link>
          <Link href = "/CreateUser">Create User</Link>
          <Link href = "/Client">Client Member</Link>
          <Link href = "/Member">Server Member</Link>
          <Link href = "/Public">Public</Link>
          {
            session ? <Link href = "api/auth/signout?callbackUrl=/">Logout</Link>
            : <Link href = "api/auth/signin">Login</Link>
          }
         </div>
        </nav>
    </header>
  )
}

export default Nav