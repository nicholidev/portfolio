import {createTheme} from "@mui/material";
import {normalFont} from "@/utils/theme/font";

const dark = createTheme({
    shape: {
        borderRadius: 16,
    },
    palette: {
        mode: "dark",
        background: {
            default: "#212121",
            paper: "#212121",
        }
    },
    typography: {
        fontFamily: normalFont.style.fontFamily
    }
})

export default dark