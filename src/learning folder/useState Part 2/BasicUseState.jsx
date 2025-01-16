import { Fragment, useState } from "react";
import { sculptureList } from "./data";
import './styles.css';

function BasicUseState() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setIndex((index + 1) % sculptureList.length);
    }

    function handlePrevious() {
        setIndex((index - 1 + sculptureList.length) % sculptureList.length);
    }

    function handleShowMore() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <Fragment>
            <br/>
            <button className="buttonS" onClick={handleClick}>Next</button>
            <button className="buttonS" onClick={handlePrevious}>Previous</button>

            <h2 className="sculpture-title">
                <i>{sculpture.name}</i> by
                {sculpture.artist}
            </h2>

            <h3 className="position">({index + 1} of {sculptureList.length})</h3>

            <button className="buttonS" onClick={handleShowMore}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                className="imgS"
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </Fragment>
    )
}

export default BasicUseState;