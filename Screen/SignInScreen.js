import React, { useState, useContext } from "react";
import { TextInput } from "react-native";
import { Button, View, Text } from "react-native-web";
import { signIn } from "../components/SignIn";
import { TokenContext } from "../Context/Context";

export default function SignInScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useContext(TokenContext)

    const connecter = () => {
        signIn(username, password).then(t => {console.log("token", t);setToken(t)});
    }

    return (
        <View>
            <View>
                <Text>username</Text>
                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    placeholder="username"
                    autoComplete="username"
                />
            </View>
            <View>
            <Text>password</Text>
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder="password"
                    autoComplete="password"
                />
            </View>
            <Button title="Se connecter" onPress={connecter}/>
        </View>
    );
}

  