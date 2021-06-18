
interface Actions {
  type: string;
  payload:number
}

const defaultState = {
 count : 0 
}

export const LoginReducer = (state = defaultState, action: Actions) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count : state.count + action.payload}
    case "DECREMENT":
      return { ...state, count : state.count - action.payload}
    default:
      return state
  }
}