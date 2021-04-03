import React from 'react';
import "./attachmentCard.scss"
import PdfImg from "./../../assets/images/file-pdf-o.svg"
import downloadImg from "./../../assets/images/download.svg"

const AttachmentCard = (props) => {
    return (
        <div className="AttachmentsCard">
            <p className="title">Attachments</p>
            <div className={"contents"}>
                <div className={"topSection"}>
                    <img src={PdfImg} alt={""}/>
                    <span>Attachment Name.pdf</span>
                    <img src={downloadImg} alt={""}/>
                </div>
                <span className={"line"}/>
                <div className={"topSection"}>
                    <img src={PdfImg} alt={""}/>
                    <span>Etiam non eros rutrum nibh.pdf</span>
                    <img src={downloadImg} alt={""}/>
                </div>
            </div>
        </div>
    );
};

export default AttachmentCard;