import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import WebSite from "./pages/site/home";
import WebApp from "./pages/player/webplayer";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact>
            <WebSite />
          </Route>
          <Route path="/webplayer">
            <WebApp />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
