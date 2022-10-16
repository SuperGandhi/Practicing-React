

export function Greeting({title, name = "User"}){
    console.log(title, name);
    return <h1>
        {title}
    </h1>
}

// destructuración props --> {name of values}
// en las props se puede pasar cualquier tipo de dato --> string,booleanos,enteros,arreglos,objetos...etc

export function UserCard({name, amount, married, address, greet}){
    console.log(greet);
    return <div>
        <h1>🤠{name}</h1>
        <p>${amount}</p>
        <p>🧐{married ? "married" : "single"}</p>
        <ul>
            <li>City: {address.city}</li>
            <li>Addres: {address.street}</li>
        </ul>
    </div>
}