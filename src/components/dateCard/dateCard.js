import React from 'react';
import "./dateCard.scss"
import CalendarImg from "./../../assets/images/calendar3-week.svg"
import clockImg from "./../../assets/images/time.svg"

const DateCard = (props) => {
    const {title,on,from}=props;
    return (
        <div className="DateCard">
            <p className="title">{title}</p>
            <div className={"contents"}>
                <div className={"leftSection"}>
                    <img src={CalendarImg} alt={""}/>
                    <span/>
                    <img src={clockImg} alt={""}/>
                </div>
                <div className={"rightSection"}>
                    <p><span>On</span>&nbsp;<strong>{on}</strong></p>
                    <span className={"line"}/>
                    <p><span>From</span>&nbsp;<strong>{from}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default DateCard;