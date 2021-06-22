import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { ACTIONS } from "./account.types"

export function fetchMovies() {
  return fetch("https://ghibliapi.herokuapp.com/films")
     .then((response) => response.json())
     .then((data) => data)
}
 
export function* getMoviesFC() {
  yield takeLatest(ACTIONS.GET_MOVIE_LIST, getMovieList)
}

export function* getMovieList(action:any): any {
  const response = yield call(fetchMovies)
  yield put({
    type: ACTIONS.GET_MOVIE_LIST, payload: response
  })
  
}

export default function* accountSaga() {
  yield all([
    getMovieList({pageSize:20}),
  ])
}