import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Expenses from "./components/routes/expenses";
import Invoices from "./components/routes/invoices";
import BaseAdmin from "./pages/BaseAdmin";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./utility/ProtectedRoute";

const App = () => {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/invoices" component={Invoices} />
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />

        <ProtectedRoute exact path="/admin" component={BaseAdmin} /> 
        
      </Switch>
      </BrowserRouter>
  </>);
}
 
export default App;