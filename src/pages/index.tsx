import React from 'react';
import {NextPage} from "next";
import AppLayout from "@/layouts/app";
import {SeoProps} from "@/utils/types/layout.type";
import {Box, Container, Typography} from "@mui/material";
import AIChat from "@/components/app/chat";
import DisplayItems from "@/components/app/items";

const pageSeo: SeoProps = {
    title: "Portfolio",
}

const HomePage: NextPage = () => {
    return (
        <AppLayout seo={pageSeo}>
            <Container
                sx={{height: "100%"}}
                maxWidth={false}>
                <Box
                    sx={{height: "100%", display: "flex", gap:4}}>
                    <DisplayItems/>
                    <AIChat/>
                </Box>
            </Container>
        </AppLayout>
    );
};

export default HomePage;