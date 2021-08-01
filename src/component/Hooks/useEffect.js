import React, {useState, useEffect} from 'react'
import "./style.css" 

const UseEffect = () => {
    const [myNum, setMynum] = useState(0)

    useEffect(() => {
        document.title = `chats(${myNum})`
    })
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
            </div>
        </>
    )
}

export default UseEffect
