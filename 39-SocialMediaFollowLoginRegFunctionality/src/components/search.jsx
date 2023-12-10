import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../style/Layout.module.css';
import { v4 as uuidv4 } from 'uuid';
function Search({ setusers, users }) {
    const [datas, setdatas] = useState([]);
    const [results, setresults] = useState([]);
    const [listResults, setlistResults] = useState(false);

    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users").then(res => {
            setdatas(res.data);
        });
    }, []);

    return (
        <div className={style.searchContainer}>
            <input
                className={style.inputSearch}
                type="text"
                placeholder='Search Users'
                onChange={(e) => {
                    const searched = e.target.value.toLowerCase().trim();
                    const result = datas.filter(elem =>
                        elem.username.toLowerCase().includes(searched)
                    );
                    setresults(result);
                    setlistResults(searched);
                    {
                        listResults && (
                            setusers(result)
                            // <div className={style.listCont}>
                            //     {results.map(elem => (
                            //         <div key={uuidv4()}>{elem.name}</div>
                            //     ))}
                            // </div>
                        )
                    }
                }}
            />

        </div>
    );
}

export default Search;



