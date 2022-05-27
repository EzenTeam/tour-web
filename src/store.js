import { configureStore } from "@reduxjs/toolkit";

import TravelSlice from "./slices/TravelSlice";

const store = configureStore({
    reducer:{
        loadTour: LoadTourSlice,
        pettour : PetTourSlice,
        Travel : TravelSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;