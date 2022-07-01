import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Expenses from "./components/routes/expenses";
import Invoices from "./components/routes/invoices";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (<>
    <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/invoices" component={Invoices} />
      <Route exact path="/expenses" component={Expenses} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
  </>);
}
 
export default App;