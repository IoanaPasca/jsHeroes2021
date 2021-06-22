import { ACTIONS } from "./account.types"

export const increment = (counter:number) => {
  return {
    type: "INCREMENT",
    payload:{count:counter}
  }
}

export const decrement = (counter:number) => {
  return {
    type: "DECREMENT",
    payload:{count:counter}
  }
}


export const getMovieList = () => {
  return {
    type: ACTIONS.GET_MOVIE_LIST,
    payload:{ pageSize: "30"}
  }
}