import { configureStore } from "@reduxjs/toolkit";

import TravelSlice from "./slices/TravelSlice";

import LoadTourSlice from './slices/LoadTourSlice';

const store = configureStore({
    reducer:{
        loadTour: LoadTourSlice,

        Travel : TravelSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;