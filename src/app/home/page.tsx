import React from 'react'
import LogoutForm from '../../components/loginForm/signout'
import { getSession } from '../../lib/actions'



export default async function page() {
  const session = await getSession();
  console.log(session);
  return (
    <>
      <h1>Welcome to home page authentication using iron-session</h1>

      <h1>Session Email: {session.email}</h1>

      <LogoutForm/>
    </>
  )
}
