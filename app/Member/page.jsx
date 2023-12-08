import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'

const Member = async() => {
  //Proteggere un pagina Server
  const session = await getServerSession();

  if (!session){
    redirect("/api/auth/signin?callbackUrk=/Member")
  }

  return (
    <div><h1>Member  Server Member</h1>
    <p>{session?.user.email}</p>
    <p>{session?.user.role}</p></div>
  )
}

export default Member