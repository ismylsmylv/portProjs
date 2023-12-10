import React from 'react'

function SecondInp({ onChange }) {
    return (
        <>
            <h2>2nd number</h2>
            <input type="number" onChange={(e) => {
                onChange(Number(e.target.value))
                console.log(e.target.value);
            }} />
        </>
    )
}

export default SecondInp