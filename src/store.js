import { configureStore } from "@reduxjs/toolkit";

import LoadTourSlice from "./slices/LoadTourSlice";
import TravelSlice from "./slices/TravelSlice";
import PetTravelSlice from "./slices/PetTravelSlice";

const store = configureStore({
    reducer:{
        loadTour: LoadTourSlice,
        Travel : TravelSlice,
        pettravel: PetTravelSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;