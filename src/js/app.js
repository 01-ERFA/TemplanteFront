import React, {useContext} from "react";
import injectContext from "./store/appContext";

import { Context } from "./store/appContext";

function App() {
  const { store, actions } = useContext(Context);

  return (
    <div>
      hello
    </div>
  );
}

export default injectContext(App);
