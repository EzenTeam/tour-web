import { configureStore } from "@reduxjs/toolkit";

import TravelSlice from "./slices/TravelSlice";

const store = configureStore({
    reducer:{
        Travel : TravelSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;