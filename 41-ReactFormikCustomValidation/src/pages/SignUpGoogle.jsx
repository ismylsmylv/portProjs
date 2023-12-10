import React from 'react'
import '../style/signupgoogle.css'
function SignUpGoogle() {
    return (
        <>

            <div className="container SignGoogle">
                <div className="card">
                    <h2>Sign in with Google</h2>
                    <form action="#" className='formGoogle'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />

                        <button type="submit">Sign In</button>
                    </form>



                </div>
            </div>

        </>
    )
}

export default SignUpGoogle