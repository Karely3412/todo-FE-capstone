import { BrowserRouter, Switch, Route } from "react-router-dom";

import Todo from "./components/pages/Todo";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/todo" component={Todo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
