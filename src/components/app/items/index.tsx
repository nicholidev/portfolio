import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {Stack} from "@mui/system";
import dynamic from "next/dynamic";
const ReactPlayer  = dynamic(()=>import("react-player"), {ssr: true})

const DisplayItems: FC = () => {
    return (
        <Box sx={{flexGrow: 1, border: "1px solid #3f3f3f", borderRadius: 3}}>
            <Stack
                sx={{height: "100%"}}
                spacing={2}
                justifyContent="center"
                alignItems="center">
                <Stack
                    sx={{width: "80%"}}
                    direction="row"
                    spacing={3}
                    justifyContent="flex-start"
                    alignItems="center">
                    <Image
                        style={{
                            borderRadius: "20px",
                        }}
                        src="/me.png"
                        alt="Nicholi Jin"
                        width={100}
                        height={100} />
                    <Stack>
                        <Typography
                            fontWeight={700}
                            variant="h5"
                            component="h1">
                            Nicholi Jin
                        </Typography>
                        <Typography>
                            Web & Mobile App developer.
                        </Typography>
                        <Typography>
                            +15 years of experience in IT industry
                        </Typography>
                    </Stack>
                </Stack>
                <ReactPlayer
                    width="80%"
                    height="540px"
                    style={{
                        borderRadius: "32px",
                        overflow: "hidden"
                    }}
                    url='https://youtu.be/5-0gTtdKQ1A' />
            </Stack>
        </Box>
    );
};

export default DisplayItems;