import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { History } from 'history';

type RootReducer = ReturnType<typeof createRootReducer>;
export type Store = ReturnType<RootReducer>;

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });
