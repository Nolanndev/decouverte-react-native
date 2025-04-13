import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { TokenContext, UsernameContext } from "../Context/Context";
import { signIn } from "../js/sign";

export default function SignInScreen() {

    const [username, setUsername] = useState("parchem211");
    const [password, setPassword] = useState("apollo");
    const [usernameCtx, setUsernameCtx] = useContext(UsernameContext);
    const [token, setToken] = useContext(TokenContext);
    const [connectionError, setConnectionError] = useState(false);

    const connection = () => {
        signIn(username, password)
            .then(t => {
                setToken(t)
                setUsernameCtx(username)
            })
            .catch(e => {
                setConnectionError(true)
                showMessage({
                    message: "Erreur",
                    description: "Identifiant ou mot de passe incorrect",
                    type: "warning",
                    backgroundColor: "#f00",
                    color: "#fff"
                })
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
                    style={[styles.input, connectionError ? styles.error : null]}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    inputMode="text"
                    onSubmitEditing={connection}
                    style={[styles.input, connectionError ? styles.error : null]}
                />
            </View>
            <Pressable onPress={connection} style={styles.button}>
                <Text>Se connecter</Text>
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
    },
    error: {
        borderColor: "red",
    }
})