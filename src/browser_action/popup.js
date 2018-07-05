import React from "react";
import { render } from "react-dom";
import { AppContainer, portName } from "../browser_action/app/index";
import { Store } from "react-chrome-redux";
import { Provider } from "react-redux";

const proxyStore = new Store({
  portName
});

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <AppContainer />
    </Provider>,
    document.getElementById("root")
  );
});
