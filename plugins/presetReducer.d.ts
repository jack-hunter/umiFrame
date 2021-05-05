export interface AnyObject {
  [key: string]: any;
}

export interface Action<P = any> {
  type: string;
  payload: P;
}

type Reducer<S = any, P = any> = (state: S, action: Action<P>) => S;

type Effect<P = any> = (
  action: Action<P>,
  effects: {
    put: (action: Action<P>) => any;
    call: Function;
    select: Function;
    take: Function;
    cancel: Function;
    [key: string]: any;
  },
) => void;

type AnyReducers = {
  [key: string]: Reducer;
};
type AnyEffects = {
  [key: string]: Effect;
};

type AnyActions = {
  [key: string]: (payload?: any) => void;
};
