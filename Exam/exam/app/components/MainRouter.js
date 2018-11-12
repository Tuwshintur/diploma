import React, { Component } from "react";

import Main from "./Main";
import ExamList from "./examlist/ExamList";

import { Scene, Router } from "react-native-router-flux";

class MainRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Main" component={Main} initial hideNavBar />
          <Scene key="ExamList" component={ExamList} hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default MainRouter;
