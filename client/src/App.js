import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import AppNavbar from "./components/AppNavbar";
import PhoneScreen from "./screens/PhoneScreen";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./action/authActions";

class App extends Component {
  state = {
    brand: "",
    priceRange: ""
  };

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/phone" component={PhoneScreen} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
