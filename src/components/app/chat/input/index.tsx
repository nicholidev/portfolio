import React, {FC} from 'react';
import {Box, Divider, IconButton, InputAdornment, TextField} from "@mui/material";
import {Icon} from "@iconify/react";

const ChatInput: FC = () => {
    return (
        <Box>
            <TextField
                multiline
                InputProps={{
                    startAdornment: (
                        <InputAdornment
                            sx={{height: "auto", pt: 2}}
                            position="start">
                            <IconButton sx={{mr: .4}}>
                                <Icon icon="hugeicons:attachment"/>
                            </IconButton>
                            <IconButton>
                                <Icon icon="hugeicons:mic-01" />
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment
                            sx={{height: "auto", pt: 2}}
                            position="end">
                            <IconButton>
                                <Icon icon="hugeicons:sent" />
                            </IconButton>
                        </InputAdornment>
                    ),
                    minRows: 2,
                    maxRows: 8,
                    sx: {
                        alignItems: 'flex-start',
                    }
                }}
                fullWidth/>
        </Box>
    );
};

export default ChatInput;