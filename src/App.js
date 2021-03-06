/* eslint-disable eqeqeq */
import React, {  } from "react";
import { SampleList } from "./components/SampleList";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { history } from "./helpers/history.js";
 
function App(props) {
 
  return (
    <BrowserRouter basename="/sample" history={history}>
      <Switch>
   
        <Route exact path="/samplelist" component={SampleList} />
    
      </Switch>
    </BrowserRouter>
  );
}

export default App;