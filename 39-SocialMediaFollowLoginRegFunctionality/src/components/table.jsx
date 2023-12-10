import { SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Layout from "../pages/Layout"
import style from "../style/Layout.module.css"
import CardRow from './CardRow'

function TableMain({ User }) {
    let loginId = JSON.parse(localStorage.getItem("loginId"))

    const [users, setusers] = useState([]);
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users").then(res => {
            setusers(res.data)
        })
    }, []);
    return (
        <>
            <Layout setusers={setusers} users={users} />
            <div className='main container'>

                {/* table */}
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {
                        users
                            .filter((user) => user.id != loginId && !User.blocked?.some((blockedUser) => blockedUser.id == user.id))
                            .map((elem) => (
                                <CardRow key={uuidv4()} elem={elem} users={users} />
                            ))
                    }
                </SimpleGrid>




            </div >

        </>

    )
}

export default TableMain