import React, { useState } from "react";
import {View} from "react-native";
import { TokenContext, UsernameContext } from "./Context/Context";
import Navigation from "./Navigation/Navigation";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();

  return (
      <UsernameContext.Provider value={[username, setUsername]}>
        <TokenContext.Provider value={[token, setToken]}>
          <Navigation />
			<FlashMessage position="top" />
        </TokenContext.Provider>
      </UsernameContext.Provider>
  );
}
