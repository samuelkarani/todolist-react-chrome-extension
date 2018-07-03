import { wrapStore, alias } from "react-chrome-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import _throttle from "lodash/throttle";
import { rootReducer, portName, addTodo, ID } from "../browser_action/app";
import { loadState, storeState } from "./storage";
import aliases from "./aliases";
import contextMenu from "./contextMenu";
import performUpdateBadge from "./badge";

const storeName = "todoList";
window.storeName = storeName;

const middleware = [alias(aliases), thunk, logger];

let store;
const performStore = () =>
  storeState(storeName, store.getState().todoList)
    .then(msg => console.log(msg))
    .catch(err => console.error(err));

const updateBadge = () => {
  const todoList = store.getState().todoList;
  if (todoList && todoList.present && todoList.present.length) {
    performUpdateBadge(todoList.present.length);
  }
};

const subscribers = () => {
  updateBadge();
  performStore();
};

const setupStore = count => {
  store.subscribe(_throttle(subscribers, 1000));
  contextMenu({
    store,
    addTodo,
    ID_GENERATOR: ID
  });
  if (count && count > 0) {
    performUpdateBadge(count);
  }
  wrapStore(store, {
    portName
  });
};

loadState(storeName)
  .then(todoList => {
    store = createStore(
      rootReducer,
      { todoList },
      applyMiddleware(...middleware)
    );
    setupStore(todoList.present.length);
  })
  .catch(err => {
    console.error(err);
    store = createStore(rootReducer, {}, applyMiddleware(...middleware));
    setupStore();
  });
