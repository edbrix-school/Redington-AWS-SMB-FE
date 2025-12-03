'use client'

import { persistor, store } from "../redux/store";
// import {PersistGate} from 'redux-persist/lib/integration/react'
import {Provider} from 'react-redux'

export default function ReduxWrapper({children}){
    return(
        <>
        <Provider store={store}>
       {/* <PersistGate persistor={persistor}> */}
        {children}
        {/* </PersistGate> */}
     </Provider>
        </>
    )
}