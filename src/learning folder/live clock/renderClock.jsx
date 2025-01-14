import Clock from "./Clock";
import {useState, useEffect} from "react";
import { Fragment } from "react";

function RenderClock() {
    const [time, setTime] = useState(() => new Date());

    function useTime() {
        useEffect(() => {
            const id = setInterval(() => {
                setTime(new Date());
            }, 1000);
        }, []);

        return time;
    }

    const timeNow = useTime();

    return (
        <Fragment>
            <h2>Live Time based On Local Device Time!</h2>
            <Clock time={time} />
        </Fragment>
    ); 
}

export default RenderClock;