import { all } from 'redux-saga/effects';

const sagas: Array<any> = [];

export default function* root() {
  yield all(sagas);
}
