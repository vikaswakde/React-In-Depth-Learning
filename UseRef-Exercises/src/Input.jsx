import { useRef } from "react";

const Input = () => {
    const focusRef = useRef('null');

    const focus = () => {
        focusRef.current.focus();
        console.log(focusRef)
    }

    return (
        <>
        <input type="text" ref={focusRef} />
        <button onClick={focus}>Focus!</button>
        </>
    )

}
export default Input;