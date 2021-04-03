import React from 'react';
import "./BookContainer.scss"

const BookContainer = (props) => {
    const {title} = props;
    return (
        <div className={"BookContainer"}>
            {title && <h2 className="mainTitle">{title}</h2>}
            <span>$238.00</span>
            <button>Book Now</button>
        </div>
    );
};

export default BookContainer;