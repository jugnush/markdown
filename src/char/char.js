import React from 'react'

const Char = (props) =>{
    const style= {
        display:'inline-block',
        margin: '20px',
        padding:'30px',
        textAlign:'cener',
        border:'1px solid red'
    }
    return(
            <div style={style} onClick={props.click}>
                {props.charactor}
            </div>
    )
}

export default Char