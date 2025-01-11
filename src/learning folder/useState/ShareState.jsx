import { useState } from "react";
function DoubleStateButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div 
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    )

}

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            Click to count together! Clicked {count} times.
        </button>
    );
}

export default DoubleStateButton;