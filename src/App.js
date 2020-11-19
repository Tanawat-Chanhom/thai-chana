import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import detail from "./pages/detail/detail";
import agreement from "./pages/agreement/agreement";
import "bootstrap/dist/css/bootstrap.min.css";
import index from "./pages/index/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register/detail" component={detail}></Route>
          <Route
            exact
            path="/register/terms-conditions"
            component={agreement}
          ></Route>
          <Route exact path="/" component={index}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
