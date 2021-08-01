import React from 'react'
import "./style.css" 

const UseState = () => {
    const [myNum, setMynum] = React.useState(0)
    return (
        <>
            <div className='center_div'>
                <p>{myNum}</p>
                <div className='button2' onClick={() => setMynum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button2' onClick={() => myNum>0 ? setMynum(myNum-1) : setMynum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseState
