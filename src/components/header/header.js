import React from 'react';
import "./header.scss";
import BookContainer from "../BookContainer/BookContainer";

const Header = () => {
    return (
        <div className={"headerContainer"}>
            <div className="title">Event Tile</div>
            <BookContainer
                title={"Python for Beginners"}
            />
        </div>
    );
};

export default Header;