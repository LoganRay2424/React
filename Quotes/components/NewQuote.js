import React, { useState } from "react";

const NewQuote = ({ setQuotes, quotes }) => {

    const [submittedBy, setSubmittedBy] = useState("");
    const [newQuoteText, setNewQuoteText] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const newQuote = {
            submittedBy,
            Text: newQuoteText
        }

        setQuotes([...quotes, newQuote]);
    }

    return (
        <div>
            <h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Submitted By:</label>
                        <input onChange={event => setSubmittedBy(event.target.value)} type="text" />
                    </div>
                    <div>
                        <label>Quote:</label>
                        <input onChange={event => setNewQuoteText(event.target.value)} type="text" />
                    </div>
                    <button>Add Quote</button>

                </form>
            </h2>
        </div>
    )
}
export default NewQuote;