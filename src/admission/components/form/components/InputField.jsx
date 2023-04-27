import React, { useState } from 'react';

function InputField(props) {
    let [val, setVal] = useState('')
    return (
        <div class="inputControl">
        <label><span>{props.label}</span> <span></span></label>
     <input onChange={e => setVal(e.target.value)} value={val} class="inputStyles" type={props.type} placeholder={props.placeholder} />
     </div>
    )
}

export default InputField