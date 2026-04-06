import React, { useContext } from 'react'
import { stdContext } from './App'
import { emplContext } from './App'

function Child() {
    const std = useContext(stdContext);
    const empl = useContext(emplContext);
    console.log(std);
    console.log(empl);
    return (
        <div>Child</div>
    )
}

export default Child