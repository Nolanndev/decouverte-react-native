import React from "react";
import { Button, View } from "react-native-web";

export default function SignInScreen() {
    return (
        <View>
            <Button
                title="S'incrire"
                onPress={() => console.log("Création d'un compte")}
            />
        </View>
    );
}
