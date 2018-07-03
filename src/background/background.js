import { wrapStore, alias } from "react-chrome-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import _throttle from "lodash/throttle";
import { rootReducer, portName, addTodo, ID } from "../browser_action/app";
import { loadState, storeState } from "./storage";
import aliases from "./aliases";
import contextMenu from "./contextMenu";
import performUpdateBadge from "./badge";

const storeName = "todoList";
const QUOTA_BYTES_PER_ITEM = 8192;

const middleware = [alias(aliases), thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
      composeEnhancers(applyMiddleware(...middleware))
    );
    setupStore(todoList.present.length);
  })
  .catch(err => {
    console.error(err);
    store = createStore(
      rootReducer,
      {},
      composeEnhancers(applyMiddleware(...middleware))
    );
    setupStore();
  });
