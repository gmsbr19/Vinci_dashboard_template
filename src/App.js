import "./styles.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-sm-flex">
        <Sidebar></Sidebar>
        <Content />
      </div>
    </Router>
  );
}

export default App;
