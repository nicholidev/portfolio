import React, {FC} from 'react';
import {Avatar, Box, Paper, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import {Icon} from "@iconify/react";

const ReceiveHistoryItem: FC = () => {
    return (
        <Box sx={{textAlign: 'left', p: 1}}>
            <Stack
                alignItems="flex-start"
                justifyContent="flex-start"
                direction="row"
                spacing={2}>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 3,
                        display: "inline-flex",
                    }}>
                    <Typography
                        component="div">
                        Hi, I am Nicholi Jin. Full Stack developer.
                    </Typography>
                </Paper>
            </Stack>
        </Box>
    );
};

export default ReceiveHistoryItem;