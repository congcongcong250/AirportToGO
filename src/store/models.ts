import { Action, Dispatch } from 'redux';

export interface ConnectedDispatchProps {
  dispatch: Dispatch<Action>;
}

export interface ReduxAction<T = any> extends Action {
  readonly payload?: T;
  readonly error?: { message?: string; [other: string]: any };
}
