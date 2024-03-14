import { configureStore, combineSlices } from "@reduxjs/toolkit";
import userDetailReducer from "../Reducer/SignInUser";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "@/Saga/rootSaga";
import rootReducer from "@/Reducer/RootReduces";
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userDetails"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
