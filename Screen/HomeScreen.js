import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native-web";
import { UsernameContext } from "../Context/Context";

export default function Home() {

	const [username, setUsername] = useContext(UsernameContext);
	useEffect(() => console.log("username", username), [username])

	return (
		<View>
			<Text>Vous êtes connectés en tant que {username}</Text>
		</View>
	);
}