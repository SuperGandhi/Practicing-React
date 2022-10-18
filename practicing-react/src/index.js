import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Greeting, UserCard} from './Greeting'
// import Product from './Product'
// import {Button} from './Button'
// import {TaskCard} from './Task'
// import {Saludar} from './Saludar'
import Posts from './Posts'


const root = ReactDOM.createRoot(document.getElementById('root'))

// const handleChange = (e) => {
//     console.log(e.target.value);
// }


const users = [
    {
        id:1,
        name: 'Ryan stop',
        image: "https://robohash.org/user1"
    },
    {
        id:2,
        name: 'Remi Galliard',
        image: "https://robohash.org/user2"
    },
    {
        id:3,
        name: 'Nancy Low',
        image: "https://robohash.org/user3"
    },
    {
        id:4,
        name: 'Topless three',
        image: "https://robohash.org/user4"
    },
    {
        id:5,
        name: 'Torpedo Two',
        image: "https://robohash.org/user5"
    },
    {
        id:6,
        name: 'Richix Lo',
        image: "https://robohash.org/user6"
    },
    {
        id:7,
        name: 'Marco Low',
        image: "https://robohash.org/user7"
    },

]

root.render(
    <>
    <Posts/>
    {
        users.map((user,i) => {
            return <h1 key={i}>
                    {user.name}
                        <img src={user.image} alt="images" />
                    </h1>
        })
    }
    {/* <Button text="Login"/>
    <Button text="Click me"/>
    <Button text="Pay"/>
    <Button text="Bonjour!"/>
    <Button text="" name="Mario"/> */}
    {/* <Greeting/> */}
    {/* <UserCard
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
    /> */}
    {/* <Product/> */}
    </>
)
