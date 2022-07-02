import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Expenses from "./components/routes/expenses";
import Invoices from "./components/routes/invoices";
import AdminDashboard from "./pages/AdminDashboard";
import BaseAdmin from "./pages/BaseAdmin";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Rapport from "./pages/Rapport";
import User from "./pages/User";
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

        <ProtectedRoute exact path="/admin" component={AdminDashboard} /> 
        <ProtectedRoute exact path="/users" component={User} /> 
        <ProtectedRoute exact path="/rapport" component={Rapport} /> 
        
      </Switch>
      </BrowserRouter>
  </>);
}
 
export default App;