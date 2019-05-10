import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware, routerReducer } from "react-router-redux";

import rootReducer from "./reducers";
import sagas from "./sagas";

export default function configureStore(browserHistory) {
  const sagaMiddleware = createSagaMiddleware();

  const reactRouterReduxMiddleware = routerMiddleware(browserHistory);

  const store = createStore(
    combineReducers({ ...rootReducer, routing: routerReducer }),
    {},
    applyMiddleware(thunkMiddleware, sagaMiddleware, reactRouterReduxMiddleware)
  );

  sagaMiddleware.run(sagas);

  return store;
}
