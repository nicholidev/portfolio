import React, {FC} from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";

const AppFooter: FC = () => {
    return (
        <Box sx={{pt: 1, pb: 1}}>
            <Container maxWidth={false}>
                <Stack alignItems="center">
                    <Typography
                        fontWeight="700"
                        color="#aaa"
                        variant="caption">
                        © {new Date().getFullYear()} Cocoach. All Rights Reserved. Developed by Nicholi Jin
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default AppFooter;