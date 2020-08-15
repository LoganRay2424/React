import React, { useState } from "react";
import Quote from "./Quote";
import NewQuote from "./NewQuote";

const Quotes = props => {
    const [quotes, setQuotes] = useState([]);



    return (
        <div>
            <NewQuote setQuotes={setQuotes} quotes={quotes} />
            <hr />

            {quotes.map((currQuote, i) => {
                return (
                    <>
                        <p>{currQuote.submittedBy}:</p>
                        <Quote key={i} quoteData={currQuote} />
                    </>
                )

            })}
        </div>
    );
};
export default Quotes;
