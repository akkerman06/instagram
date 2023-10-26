import { configureStore , ReducersMapObject } from "@reduxjs/toolkit";

const rootReducers : any =  {
    reducer: {}
}

export const store  = configureStore({
    reducer: rootReducers,
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;