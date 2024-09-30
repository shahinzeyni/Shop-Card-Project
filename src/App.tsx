import React from "react";
import "./App.css";

import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import CardContextProvider from "./Context/CardContext";

function App() {
  const router = useRoutes(routes);
  return (
    <CardContextProvider>
      
    <div className="app">
      <Header />
      {/* Start Content */}
      {router}

      {/* Finish Content */}

      <footer>
        <a style={{fontFamily:"Arial, Helvetica, sans-serif "}} target={"_blank"} href="https://github.com/shahin-shahin">
          Hello Dear!
        </a>
      </footer>
    </div>
    </CardContextProvider>
  
  );
}

export default App;
