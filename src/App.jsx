import Header from "./Header";

import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="center">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
