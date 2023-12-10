import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from "../style/Layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/search';
import axios from 'axios';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, faTwitter, faFontAwesome)


function Layout({ setusers, users }) {
    let loginId = localStorage.getItem("loginId")
    const [isLogged, setisLogged] = useState(false);
    useEffect(() => {
        setisLogged(loginId)
    }, []);
    const [reqLength, setreqLength] = useState(0);
    const [friendLength, setfriendLength] = useState(0);

    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId)
            .then(res => {
                setreqLength(res.data?.requests?.length)
                setfriendLength(res.data?.friends?.length)
            });
    }, []);


    return (
        <div className={style.containerNav}>
            <nav className={`${style.nav} container ${style.containerNav}`}>
                <ul className={style.ul}>
                    <li className={style.logo}>
                        <Link to="/">Friender</Link>
                    </li>
                    <li><Search setusers={setusers} users={users} /></li>
                    <div className={style.rightNav}>
                        <li className={style.reqNav}>
                            <Link to="/Friends"><div className={style.countContainer}><FontAwesomeIcon icon="fa-solid fa-user" /> <div className={style.count}>{friendLength}</div></div> </Link>
                        </li>
                        <li className={style.reqNav}>
                            <Link to="/Requests"><div className={style.countContainer}><FontAwesomeIcon icon="fa-solid fa-envelope" /> <div className={style.count}>{reqLength}</div></div> </Link>
                        </li>
                        <li className={style.reqNav}>
                            <Link to="/Block"><div className={style.countContainer}><FontAwesomeIcon icon="fa-solid fa-ban" /></div> </Link>
                        </li>
                        <li>
                            <button>
                                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" onClick={(e) => {
                                    // console.log(e.target)
                                    localStorage.removeItem("loginId");
                                    setisLogged(false);
                                    window.location.reload()
                                }} />
                            </button>
                        </li>
                    </div>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default Layout;
