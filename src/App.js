import React from "react";
import AllRoutes from "./Routes/AllRoutes";
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">

<BrowserRouter>
<AllRoutes/>
</BrowserRouter>
    </div>
  );
}
export default App;
