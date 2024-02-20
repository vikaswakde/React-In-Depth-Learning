import { useState } from "react";

function TextBox() {
    
    const [text, setText] = useState("");


    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    return(
        <>
        <h1>{text}</h1>
        <input type="text" onInput={handleInputChange} />
        </>
    )
}

export default TextBox;