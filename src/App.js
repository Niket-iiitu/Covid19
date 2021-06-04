import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Page from "./page";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div style={{ height: "100%", width: "100%" }}>
    //     <main>
    //       <Route path="/" component={Page} exact />
    //     </main>
    //   </div>
    // </BrowserRouter>
    <Page />
  );
};

export default App;
