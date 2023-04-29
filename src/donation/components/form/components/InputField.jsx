import React, { useState } from 'react';

function InputField(props) {
    let [val, setVal] = useState('')
    return (
        <div class="inputControl">
        <label><span>{props.label}</span> <span></span></label>
     <input onKeyUp={e => {
       
       if(!val.trim()) {
            e.target.style.border = "1px solid red"
        }else {
            e.target.style.border = "1px solid black"
        }
     }} onMouseOver={e => {
        e.target.style.border = "1px solid hsl(243, 100%, 62%)"
     }}  onMouseLeave={e => {
        e.target.style.border = "1px solid black"
     }} onChange={e => {
        setVal(e.target.value)
        localStorage.setItem(`${props.id}`,e.target.value.trim())
     }} value={val} class="inputStyles" type={props.type} placeholder={props.placeholder} />
     </div>
    )
}

export default InputField