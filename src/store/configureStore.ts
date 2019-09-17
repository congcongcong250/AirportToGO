import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';

import { createRootReducer } from '../reducers';
import sagas from '../sagas';

const configureStore = (preloadedState: any, history: History) => {
  const rootReducer = createRootReducer(history);
  const historyMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  // For initialize Redux DevTools Extension
  const composeEnhancers = (process.env.NODE_ENV === 'development' //
  && window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // prettier-ignore
  const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware, historyMiddleware)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
