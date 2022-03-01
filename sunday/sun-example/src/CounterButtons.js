import React from 'react'

const containerStyle = {
    display: 'flex'
}
const buttonStyle = {
    fontSize :'1.5rem',
    width: '40px',
    height: '40px'
}
const CounterButtons = (props) => {
    return (
        <>
        <div style={containerStyle}>
            <button onClick={props.minusOne} style={buttonStyle}>-</button>
            <button onClick={props.addOne} style={buttonStyle}>+</button>
        </div>
        </>
    )
}
export default CounterButtons;