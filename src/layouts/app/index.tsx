import React, {FC} from 'react';
import {LayoutType} from "@/utils/types/layout.type";
import {Box, Stack} from "@mui/material";
import SeoHead from "@/components/shared/seo/head";
import AppHeader from "@/layouts/app/components/header";
import AppFooter from "@/layouts/app/components/footer";

const AppLayout: FC<LayoutType> = (props) => {
    const { seo, children } = props;

    return (
        <Box>
            <SeoHead {...seo}/>
            <Box
                sx={{
                    display: "flex",
                    height: "100vh",
                    flexDirection: "column",
                }}>
                <AppHeader/>
                <Box sx={{flexGrow: 1}}>
                    {children}
                </Box>
                <AppFooter/>
            </Box>
        </Box>
    );
};

export default AppLayout;