import React from "react"

const Useroutput = (props) => {
    return(
        <div className="user-output"> 
            <p>{props.username}</p>
        </div>
    )
}

export default Useroutput;