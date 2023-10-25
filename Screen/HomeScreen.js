import React, { useState } from "react";
import { Text } from "react-native-web";
import { UsernameContext } from "../Context/Context";

export default function Home() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <>
      <UsernameContext.Consumer>
        {([username, setUsername]) => (
			<Text>Vous êtes connectés en tant que {username}</Text>
		)}
      </UsernameContext.Consumer>
    </>
  );
}
