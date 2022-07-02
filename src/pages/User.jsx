import { Alert, Table, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import Dashboard from "../components/dashboard/Dashboard";
import useFetchDataWithPagination from "../utility/useFetchDataWithPagination";
import usePostData from "../utility/usePostData";

const User = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, submitData } = usePostData()
    const { data, resfreshSearch } = useFetchDataWithPagination("users");
    const [listeUser, setListeUser] = useState(null);

    useEffect(() => {
        if (data?.data) {
            setListeUser(data?.data)
        }
    }, [data]);

    const saveUser = (e) => {
        e.preventDefault();
        const data = { email, name, password };
        submitData("register", data);
        resfreshSearch();
    }
    return (<Dashboard>
        <form onClick={saveUser}>
            <input type="text" required placeholder="NAME" onChange={(e)=> setName(e.target.value)}/>
            <input type="email" required placeholder="EMAIL" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="text" required placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Enregistrer" />
            {error && <Alert>
                {JSON.stringify(error)}
            </Alert>}
        </form>

        <Table>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Nom et prénom </TableCell>
                <TableCell>Email</TableCell>
            </TableRow>

            {listeUser && listeUser.map((el, index) => <TableRow>
                <TableCell>{ ++index}</TableCell>
                <TableCell>{ el.name}</TableCell>
                <TableCell>{ el.email}</TableCell>
            </TableRow>)}
        </Table>
    </Dashboard>);
}
 
export default User;