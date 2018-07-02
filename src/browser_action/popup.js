import React from "react";
import { render } from "react-dom";
import { AppContainer, portName } from "../browser_action/app/index";
import { Store } from "react-chrome-redux";
import { Provider } from "react-redux";
// uikit
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
// other
import registerServiceWorker from "../browser_action/app/registerServiceWorker";

UIkit.use(Icons);
window.UIkit = UIkit;

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

registerServiceWorker();
