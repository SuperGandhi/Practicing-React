import React from 'react'
import ReactDOM from 'react-dom/client'





const root = ReactDOM.createRoot(document.getElementById('root'))


function Greeting(){
    const married = false
    return <h1>{married ? 'Im married 😀': 'Im not married🙂' }</h1>
}




root.render(
    <Greeting/>
)
