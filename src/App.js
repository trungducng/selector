import React from "react";
import CScreen from "./screens/CScreen";
import { Provider } from "react-redux";
import * as redux from "redux";
import { rootReducer } from "./reducers/reducer";

const store = redux.createStore(
  rootReducer,
  redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <CScreen />
    </Provider>
  );
};

export default App;
