import type {AppProps} from "next/app";
import {CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";
import dark from "@/utils/theme";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={dark}>
            <CssBaseline/>
            <GlobalStyles
                styles={{
                    "::-webkit-scrollbar": {
                        width: "5px"
                    },
                    "::-webkit-scrollbar-track": {
                        background: "#000000"
                    },
                    "::-webkit-scrollbar-thumb": {
                        background: "#2d2d2d"
                    },
                    "::-webkit-scrollbar-thumb:hover": {
                        background: "#1a183a"
                    },

                }}/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
