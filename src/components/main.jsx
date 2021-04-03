import MainCard from "./mainCard/mainCard";
import DateCard from "./dateCard/dateCard";
import AttachmentCard from "./attachmentCard/attachmentCard";
import "./main.scss";
import Header from "./header/header";
import BookContainer from "./BookContainer/BookContainer";

export const Main = (props) => {
    return (
        <div className={"Main"}>
                <Header/>

                <MainCard/>

                <div className={"dateCards"}>
                    <DateCard
                        title={"Start Date"}
                        on={"25th Nov 2020"}
                        from={"1:30 PM to 4:30 PM"}
                    />
                    <DateCard
                        title={"Start Date"}
                        on={"26th Nov 2020"}
                        from={"5:30 PM to 8:30 PM"}
                    />
                    <AttachmentCard/>
                </div>

                <div className={"bookMain"}>
                    <BookContainer/>
                </div>*
        </div>
    )
}
