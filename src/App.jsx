import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeNames from "./routes/routeNames";
import Layout from "./layout/General";
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routeNames.general.landing} element={<Layout />}>
            <Route path={routeNames.general.landing} element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
