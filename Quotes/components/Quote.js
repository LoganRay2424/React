import React from 'react';

const Quote = ({ quoteData }) => {

    const { submittedBy, text } = quoteData;

    return (
        <div>
            <p>Submitted By:{submittedBy}</p>
            <q>{text}</q>

        </div>

    );
}
export default Quote;