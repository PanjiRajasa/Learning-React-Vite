import { useState } from 'react';
import './style/styles.css';
import { Fragment } from 'react';
import Quote from './Quote';
import FancyText from './GenerateQuote';

export default function QuoteDisplay({children}) {
    const [index, setIndex] = useState(0);
    const nextQuote = () => setIndex( (index + 1) % Quote.length)
    const quote = Quote[index];

    return (
        <Fragment>
            <p>Your inspirational quote is:</p>
            <FancyText text={quote} />
            <button onClick={nextQuote}>Inspire me again</button>
            {children}
        </Fragment>
    )
}