

import React, { useState } from "react";

const AddCard = ({ addCard }) => {
    const [cardTitle, setCardTitle] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        addCard(cardTitle);
        setCardTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter card title"
                value={cardTitle}
                onChange={event => setCardTitle(event.target.value)}
            />
            <button type="submit">Add Card</button>
        </form>
    );
};

export default AddCard;

