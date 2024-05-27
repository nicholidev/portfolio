import React, {FC} from 'react';
import {Box} from "@mui/material";
import SendHistoryItem from "@/components/app/chat/history/send";
import ReceiveHistoryItem from "@/components/app/chat/history/receive";

const ChatHistory: FC = () => {
    return (
        <Box
            className="scroll"
            sx={{
                flexGrow: 1,
                borderRadius: 2,
                position: "relative",
            }}>
            <Box
                sx={{
                    position:"absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    display: "flex",
                    flexDirection: "column-reverse",
                    overflow: "auto",
                }}>
                <SendHistoryItem/>
                <ReceiveHistoryItem/>
            </Box>
        </Box>
    );
};

export default ChatHistory;