import React from "react";

function Conditional(props) {
    function checkGoal() {
        const isGoal = props.isGoal;

        if(isGoal) {
            return great();
        } else {
            return missedGoal();
        }
    }

   return (
    <>
        <div>
            <button onClick={checkGoal}>Shoot!</button>
        </div>
    </>
   )
};

function missedGoal() {
    return <h1>Missed HAHA</h1>
}

function great() {
    return <h1>Goal!</h1>
}

export default Conditional;