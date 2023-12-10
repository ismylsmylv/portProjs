import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function AddProd({ addProd, setaddProd, prods, setprods }) {
    const [addName, setaddName] = useState("");
    const [addPrice, setaddPrice] = useState(0);
    const [addStock, setaddStock] = useState(0);
    const [addSale, setaddSale] = useState("");
    return (
        <div className='addInps'>
            <input className='addInp' type="text" placeholder='name' onChange={(e) => {
                setaddName(e.target.value)
            }} />
            <input className='addInp' type="number" placeholder='price' onChange={(e) => {
                setaddPrice(e.target.value)
            }} />
            <input className='addInp' type="number" placeholder='stockCount' onChange={(e) => {
                setaddStock(e.target.value)
            }} />
            <input className='addInp' type="text" placeholder='sale' onChange={(e) => {
                setaddSale(e.target.value)
            }} />
            <Button colorScheme='cyan' onClick={
                () => {
                    let obj = {
                        "name": addName,
                        "price": addPrice,
                        "stock": addStock,
                        "discountPercent": addSale
                    }
                    console.log(obj)
                    setaddName('');
                    setaddPrice('');
                    setaddStock('');
                    setaddSale('');
                    setaddProd(false)
                    let prodArr = [...prods]
                    prodArr.push(obj)
                    setprods(prodArr);
                    axios.post("https://654bcb115b38a59f28efb8ab.mockapi.io/products", obj)
                }
            }>Add</Button>

        </div >
    )
}

export default AddProd