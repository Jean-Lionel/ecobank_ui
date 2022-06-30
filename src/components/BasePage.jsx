import { Box } from "@mui/material";
import Annimation from "./Animation";

const BasePage = (props) => {
    return (<Box sx={{
        width: "95%",
        margin: "auto"
    }} className="homePage">
        {props.children}
    </Box> );
}
 
export default BasePage;