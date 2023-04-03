import React, { useContext } from "react";
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContextProvider";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <span><VideocamIcon/></span>
          <span><PersonAddAlt1Icon/></span>
          <span><MoreHorizIcon/></span>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
