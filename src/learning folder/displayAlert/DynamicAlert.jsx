import { useRef } from "react";

function DynamicAlert() {
    
    const redButtonRef = useRef(null);
    const blueButtonRef = useRef(null);
    const whiteButtonRef = useRef(null);

    function alertRed() {
        alert("Hello from Red Button!");
            document.body.style.backgroundColor = "red"

            redButtonRef.current?.focus();
    }

    function alertBlue() {
        alert("Hello from Blue Button!");
            document.body.style.backgroundColor = "blue";
          
            blueButtonRef.current?.focus();
     
    }

    function whiteAlert() {
        alert("Reset to default");
            document.body.style.backgroundColor = "white";

            whiteButtonRef.current?.focus();
    }

    return (
        <>
            <div style={{padding: "1rem"}}>
                <button ref={redButtonRef} onClick={() =>  {alertRed()}} >Hello from Red Button</button>
                <button ref={blueButtonRef} onClick={() =>  {alertBlue()}}>Hello from Blue Button</button>
                <button ref={whiteButtonRef} onClick={whiteAlert}>Back to white background color</button>
            </div>
        </>
    )
}

export default DynamicAlert;