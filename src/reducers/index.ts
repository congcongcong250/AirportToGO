import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import feed from './feed';
import detail from './detail';

type RootReducer = ReturnType<typeof createRootReducer>;
export type Store = ReturnType<RootReducer>;

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    feed,
    detail
  });
