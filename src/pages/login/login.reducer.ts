
interface Actions {
  type: string;
  payload:number
}

const defaultState = {
  count: 0,
  movieList:[]
}

export const LoginReducer = (state = defaultState, action: Actions) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count : state.count + action.payload}
    case "DECREMENT":
      return { ...state, count: state.count - action.payload }
    case "GET_MOVIE_LIST":
      return { ...state, movieList: action.payload }
    default:
      return state
  }
}