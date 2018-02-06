import React from "react"

const Userinput = (props) => {
    return(
        <div  className="user-input"> 
            <input type="text" onChange={props.change} value={props.value}/>
        </div>
    )
}

export default Userinput;