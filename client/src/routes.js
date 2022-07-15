import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Register from "./pages/Register";
import Report from "./pages/Report";

function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/list" element={ <List/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/report" element={ <Report/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;