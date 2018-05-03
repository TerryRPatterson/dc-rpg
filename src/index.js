import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import "./index.css";
import reducer from "./reducers/index";
import NavFooter from "./components/NavigationFooter";
import registerServiceWorker from "./registerServiceWorker";
import EncounterDisplay from "./components/encounterDisplay";




const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let reactAppReduxStore =
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/register" componet="test"/>
        <Route exact path="/login" componet="Test"/>
        <Route>
          <main className="main">
            <NavFooter/>
            <Route exact path="/main" component={
              () => {
                return <EncounterDisplay/>
              }
            }/>
          </main>
        </Route>
      </Switch>
    </Router>
  </Provider>;

ReactDOM.render( reactAppReduxStore, document.getElementById("root"));

registerServiceWorker();
