import React from 'react'

const Validation = (props)=>{
    let msg;
   props.textL > 5 ? msg="too long" : msg="too short"
    
    return(
        <div>
            <p>{msg}</p>
        </div>
    )
}

export default Validation 