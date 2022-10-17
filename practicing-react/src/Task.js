import "./Task.css"

// ejm styles in line --> estilos en línea

// export function TaskCard(){

//     const cardStyles = {background: "red", color: "#fff", padding: "20px"}

//     return(
//         <div style={cardStyles}>
//             <h1 style={{fontWeight: "lighter"}}>My firts task</h1>
//             <p>Task completed</p>
//         </div>
//     )
// }


export function TaskCard({ready}){
    return(
        <div className="card">
            <h1>My firts task</h1>
            <span className
            
            ={ready ? 'bg-green' : 'bg-red'}>
                {
                    ready ? "Task completed" : "Task not finished yet"
                }
            </span>
        </div>
    )
}