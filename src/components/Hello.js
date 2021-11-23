import React, { useState } from 'react'

function Hello() {
    const [name, setName] = useState('')
    const onChangeInput = e => setName(e.target.value)
    const onClickButton = () => console.log("누름")
    return (
        <div>
            <h1 data-testid="my-heading">Hello!</h1>
            <button type="button" onClick={onClickButton}>버튼</button>
            <input type={'text'} value={name} onChange={onChangeInput}></input>
        </div>
    )
}

export default Hello