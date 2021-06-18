export const decrement = () => {
  return {
    type: "DECREMENT",
    payload: 2
  }
}

export const increment = () => {
  return {
    type: "INCREMENT",
    payload: 1
  }
}