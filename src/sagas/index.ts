import { all } from 'redux-saga/effects';
import airports from './airports';

const sagas = [...airports];

export default function* root() {
  yield all(sagas);
}
