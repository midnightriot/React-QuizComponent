type FunctionType = (...args: any[]) => any
type ActionCreatorsMapObject = {[actionCreator:string]: FunctionType}

//https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575
// Use to reduce type noise with Reducers. Note that this means actions needs to be an object that has all the action creators on it
export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>