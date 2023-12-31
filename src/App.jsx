import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/app.scss";
import Todo from "./components/pages/Todo";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
