import { Provider } from "react-redux";

import React from "react";
import BioForm from "./bioinformation";
import store from "./store";
//import BioForm from "./Bioinformation";

function App() {
  return (
    <Provider store={store}>

    <BioForm/>
    </Provider>
     
    
  );
}

export default App;
