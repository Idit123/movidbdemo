import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { Provider } from "react-redux"
import AllStore from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { toolKitStore } from "./redux-toolkit/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={toolKitStore}>
      <PersistGate loading={null} persistor={AllStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
