import { configureStore } from "@reduxjs/toolkit";

import LoadTourSlice from "./slices/LoadTourSlice";
import TravelSlice from "./slices/TravelSlice";

const store = configureStore({
    reducer:{
        loadTour: LoadTourSlice,
        Travel : TravelSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;