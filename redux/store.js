// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// // import { persistStore, persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// // import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
// import userDetailsSlice from "./slices/userDetailsSlice"

//  // Correct import

// const storePersistConfig = {
//     key: 'root', 
//     // storage,
//     whitelist: ['users'],
// };

// const rootReducer = combineReducers({
//     user: userDetailsSlice,
// });

// // const persistedReducer = persistReducer(storePersistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],  // Ignore persist/PERSIST action
//         },
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
