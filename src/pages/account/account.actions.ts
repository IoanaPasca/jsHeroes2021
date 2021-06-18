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