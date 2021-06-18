

interface Action {
  type: string;
  payload : {count:number}
}

const defaultState ={
  count: 0,
  label:"increment"
}


export const AccountReducer = (state = defaultState, action: Action) => {
  
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.count }
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.count }
      default:
        return state
    
  }

}