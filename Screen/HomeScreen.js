import React, { useState } from "react";
import { Text } from "react-native-web";
import { UsernameContext } from "../Context/Context";

export default function Home() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <>
      <UsernameContext.Consumer>
        {([username, setUsername]) => {
			let msg = "Vous n'êtes pas connecté";
			if (username != undefined) {
				msg = "Vous êtes connecté en tant que " + username;
			}
          return (
            <>
              <Text>Welcome !</Text>
              <Text>{msg}</Text>
            </>
          );
        }}
      </UsernameContext.Consumer>
    </>
  );
}
