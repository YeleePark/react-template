// App.js
import React from "react";
import { withTranslation } from "react-i18next";
import Routers from "routers";

const App = () => {
  return <Routers />;
};

export default withTranslation()(App);
