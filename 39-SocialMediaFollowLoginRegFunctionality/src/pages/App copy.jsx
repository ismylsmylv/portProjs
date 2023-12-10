import { useState } from 'react'
import '../App.css'
import LoginForm from '../components/loginForm'
import SignForm from '../components/signForm'
import TableMain from '../components/table'
import TableUsers from "../components/tableUsers"

function AppC() {
  const [isAdmin, setisadmin] = useState(false);
  const [check, setCheck] = useState(true)
  const [isLogged, setisLogged] = useState(false);
  return (
    <>

      {
        (isLogged ? <TableMain setisadmin={setisadmin} isAdmin={isAdmin} /> : check ? <LoginForm setCheck={setCheck} isLogged={isLogged} setisLogged={setisLogged} setisadmin={setisadmin} isAdmin={isAdmin} /> : <SignForm setCheck={setCheck} />)
      }



    </>
  )
}

export default AppC
