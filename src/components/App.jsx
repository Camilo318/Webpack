import React, { useState } from 'react'
import data from './data.json'

const App = () => {
    const [list, setList] = useState([])
    const handleClick = () => {
        setList(data.loaders)
    }

    const loaders = list.map(loader => (
        <li key={loader.id}>
            {loader.name}
        </li>
    ))
    return (
        <div>
            <h1>Billie Eilish</h1>
            <ul>{loaders}</ul>

            <button onClick={handleClick}>Show Loaders</button>
        </div>
    )
}

export default App