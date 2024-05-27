import React, {FC} from 'react';
import {Box, Stack} from "@mui/system";
import LogoSvg from "@/components/shared/logo";
import {Container, IconButton} from "@mui/material";
import {Icon} from "@iconify/react";
import Link from "next/link";

const AppHeader: FC = () => {
    return (
        <Box sx={{py: 1}}>
            <Container maxWidth={false}>
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row">
                    <Link href="/">
                        <LogoSvg width={100} height={80}/>
                    </Link>
                    <Stack
                        spacing={1}
                        direction="row">
                        <IconButton>
                            <Icon icon="hugeicons:linkedin-01" />
                        </IconButton>
                        <IconButton>
                            <Icon icon="hugeicons:github" />
                        </IconButton>
                        <IconButton>
                            <Icon icon="hugeicons:file-download" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default AppHeader;