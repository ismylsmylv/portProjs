import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../src/App.css'
import style from "../style/Layout.module.css"
function SignForm({ setCheck }) {
    const [signName, setsignName] = useState("");
    const [signPass, setsignPass] = useState("");
    const [signEmail, setsignEmail] = useState("");
    const [isCheck, setisCheck] = useState(false);
    const [usershort, setusershort] = useState(false);
    const [passhort, setpasshort] = useState(false);
    const [wrongpass, setwrongpass] = useState(false);

    return (
        <div className='formLogin'>
            <h2>Sign up</h2>
            {wrongpass ? <p className={style.error}>Please fill all required inputs</p> : <p></p>}
            <label htmlFor="text">Username</label>
            <input type="text" id='text' placeholder='enter username' onChange={(e) => {
                setsignName(e.target.value.trim())
                console.log(signName)
                if (signName.length < 6) {
                    setusershort(true)
                }
                else {
                    setusershort(false)
                }
            }} />
            {usershort ? <p className={style.error}>Consider using longer username</p> : <p></p>}
            <label htmlFor="email" >Email</label>
            <input type="email" id='email' placeholder='enter email' onChange={(e) => {
                setsignEmail(e.target.value.trim())
                console.log(signEmail)
            }} />
            <label htmlFor="pass" >Password</label>
            <input type="password" id='pass' placeholder='enter password' onChange={(e) => {
                setsignPass(e.target.value.trim())
                console.log(signPass)
                if (signPass.length < 9) {
                    setpasshort(true)
                }
                else {
                    setpasshort(false)
                }
            }} />
            {passhort ? <p className={style.error}>Password should contain at least 8 characters</p> : <p></p>}


            <button className='signup' onClick={
                (e) => {
                    if (signName == "" || signPass == "" || signEmail == "") {
                        setwrongpass(true)
                    }
                    else {
                        {
                            e.preventDefault()
                            let user = {
                                "username": signName,
                                "email": signEmail,
                                "password": signPass
                            }
                            axios.post("https://654bcb115b38a59f28efb8ab.mockapi.io/users", user).then(
                                console.log(user)
                            )
                            setCheck(false)
                        }
                    }
                }
            }>Sign up</button>
            <button className='signins' onClick={() => {
                setCheck(false)
                console.log("first")
            }}>Log in instead</button>
        </div>
    )
}

export default SignForm