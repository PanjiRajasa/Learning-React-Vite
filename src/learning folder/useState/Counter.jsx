import { useState } from "react";

function Count() {

    return (
        <div>
            <h1>Counter that use "useState"</h1>
            <CounterButton />
        </div>
    );

    function CounterButton() {
        const [count, setCount] = useState(0);
        const [doubleCount, setDoubleCount] = useState(0);

        function counting() {
            setCount(count + 1)
        }

        function doubleCounting() {
            setDoubleCount(doubleCount + 2)
        }

        return (
            <div>
                <button onClick={counting}>Single click count: {count}</button>
                <button onClick={doubleCounting}>Double click count: {doubleCount}</button>
            </div>
        )
    }
    
}

export default Count;