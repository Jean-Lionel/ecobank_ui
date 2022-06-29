import { Box } from "@mui/material";

const BasePage = (props) => {
    return (<Box>
        <h1>Je suis un Millionnaire</h1>
        {props.children}
    </Box> );
}
 
export default BasePage;