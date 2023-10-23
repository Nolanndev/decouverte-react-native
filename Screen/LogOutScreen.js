import React from "react";
import { Button, View } from "react-native-web";

export default function LogOutScreen() {
    return (
        <View>
            <Button
                title="Se déconnecter"
                onPress={() => console.log("Déconnexion")}
            />
        </View>
    );
}
