import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greeting, UserCard} from './Greeting'
// import Product from './Product'

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<>
    <Greeting/>
    <UserCard
    name="Joe Vasquez"
    amount={3000}
    married={true}
    points={[11,32,44.22]}
    address={{street: "123 Main Street", city:"New York"}}
    greet = {function () {alert('Hello')}}
    />
    <UserCard
    name="Shamdy Bueno"
    amount={3000}
    married={true}
    points={[24,45,44.33]}
    address={{street: "423 Main Street", city:"Colorado"}}
    greet = {function () {alert('Bye')}}
    />
    {/* <Product/> */}
</>
)
