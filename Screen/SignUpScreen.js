import React from "react";
import { TextInput, StyleSheet, Pressable } from "react-native";
import { View, Text } from "react-native-web";

export default function SignInScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText=""
                    value=""
                    placeholder="Username"
                    inputMode="text"
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText=""
                    value=""
                    placeholder="Password"
                    inputMode="text"
                    style={styles.input}
                />
            </View>
            <Pressable onPress="" style={styles.button}>
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