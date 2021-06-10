import '../styles/Clock.css'


function Clock(props){
    
    

    return(
        <div className="show-time">
            <h1>{props.time}</h1>
        </div>
    )
    
}
export default Clock;