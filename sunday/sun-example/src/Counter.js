import React from 'react'
import CounterButtons from './CounterButtons'

const Counter = (props) => {
    return(
        <>
        <h1>{props.counter}</h1>
        <CounterButtons addOne={props.addOne} minusOne={props.minusOne} />
        </>
    )
}
export default Counter