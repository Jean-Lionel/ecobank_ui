import { Box } from "@mui/material";
import Annimation from "./Animation";

const BasePage = (props) => {
    return (<Box sx={{
        width: "80%",
        margin: "auto",
        backgroundColor: "black",
        color: "white"
    }} className="homePage">
        {props.children}
    </Box> );
}
 
export default BasePage;