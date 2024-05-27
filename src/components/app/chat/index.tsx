import React, {FC} from 'react';
import {Box} from "@mui/system";
import ChatHistory from "@/components/app/chat/history";
import ChatInput from "@/components/app/chat/input";

const AIChat: FC = () => {
    return (
        <Box
            sx={{
                height: "100%",
                width: "700px",
                display: "flex",
                flexDirection: "column",
                gap: 2
            }}>
            <ChatHistory/>
            <ChatInput/>
        </Box>
    );
};

export default AIChat;