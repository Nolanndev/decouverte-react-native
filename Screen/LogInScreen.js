import React from "react";
import { Button, View } from "react-native-web";

export default function LogInScreen() {
    return (
        <View>
            <Button title="Se connecter" onPress={() => console.log("connexion")}/>
        </View>
    );
}
