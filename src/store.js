import { configureStore } from "@reduxjs/toolkit";

import LoadTourSlice from "./slices/LoadTourSlice";

const store = configureStore({
    reducer:{
        loadTour: LoadTourSlice,

    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;