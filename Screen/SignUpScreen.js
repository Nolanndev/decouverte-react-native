import React, { useContext, useState } from "react";
import { TextInput, StyleSheet, Pressable } from "react-native";
import { View, Text } from "react-native-web";
import {signUp} from "../js/sign";
import { TokenContext, UsernameContext } from "../Context/Context";

export default function SignInScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameCtx, setUsernameCtx] = useContext(UsernameContext)
    const [token, setToken] = useContext(TokenContext)

    const connection = () => {
        console.log("inscription");
        signUp(username, password)
            .then(t => {
                setToken(t)
                setUsernameCtx(username)
            })
            .catch(e => {
                console.error(e)
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Username"
                    inputMode="text"
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    inputMode="text"
                    style={styles.input}
                    onSubmitEditing={connection}
                />
            </View>
            <Pressable onPress={connection} style={styles.button}>
                <Text>S'inscrire</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },
    inputContainer: {
        backgroundColor: "#f5f0df",
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
    },
    button : {
        borderWidth: 1,
        textAlign: 'center',
        padding: 5,
        marginTop: 15,
        borderRadius: 5,
    }
})