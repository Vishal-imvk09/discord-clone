import React from 'react';
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRounded from "@material-ui/icons/EditLocationRounded";
import PeopleAltRounded from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

function ChatHeader({ channelName }) {
    return (
        <div className="chatheader">
            <div className="chatheader__left">
                <h3>
                    <span className="chatheader__hash">#</span>{channelName}
                </h3>
            </div>

            <div className="chatheader__right">
                <NotificationsIcon />
                <EditLocationRounded />
                <PeopleAltRounded />

                <div className="chatheader__search">
                    <input type="text" placeholder='Search' />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
