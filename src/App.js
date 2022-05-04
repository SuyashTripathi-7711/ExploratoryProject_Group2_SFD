import { BrowserRouter, Routes, Route } from "react-router-dom";

import Point from "./Point";
import Home from "./Home";
import Uniform from "./Uniform";
import Variable from "./Variable";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact={true}></Route>
          <Route path='/uniform' element={<Uniform/>}></Route>
          <Route path="/point" element={<Point/>}></Route>
          <Route path="/variable" element={<Variable/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
      );
}

export default App;
