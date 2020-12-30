import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
