import React from 'react'

function FirstInp({ onChange }) {
    return (
        <>
            <h2>1st number</h2>
            <input type="number" onChange={(e) => {
                onChange(Number(e.target.value))
                console.log(e.target.value);
            }} />
        </>
    )
}

export default FirstInp