import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import detail from "./pages/detail/detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register/detail" component={detail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
