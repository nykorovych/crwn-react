import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubFromAuth = null

  componentDidMount() {
    this.unsubFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("AAAAAAAAAAAAAAAAAaaa",this.unsubFromAuth);

    });
  }
  componentWillUnmount() {
    this.unsubFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
