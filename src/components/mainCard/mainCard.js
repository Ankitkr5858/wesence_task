import React from 'react';
import "./mainCard.scss";
import Icon1 from "./../../assets/images/icon_1.png"
import Icon2 from "./../../assets/images/icon_2.png"
import Icon3 from "./../../assets/images/icon_3.png"
import Img1 from "./../../assets/images/img_1.png"

const MainCard = () => {
    return (
        <div className="MainCardContent">
            <div className="MainCardImg"><img src={Img1}/></div>
            <div className={"contentSection"}>
                <p className="MainCardTitle">Event Details</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibs nec ullamcorper mattis, pulvinar dapibus leo.
                    eo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis, pulvinar dapibus leo.</p>
                <p>
                    <div className="labels"><img src={Icon1}/><span className="label"> Age 7-12 Yrs</span></div>
                    <div className="labels">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={Icon2}/><span
                        className="online">Online</span></div>
                </p>
                <p>
                    <div className="labels"><img src={Icon3}/><span className="label"> Duration 60 mins</span></div>
                    <div className="labels"><span className="label">By - Teacher Trisha Musziri</span></div>
                </p>
            </div>
        </div>
    );
};

export default MainCard;