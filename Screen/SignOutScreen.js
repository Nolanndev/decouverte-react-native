import React, { useContext } from "react";
import { Button, View } from "react-native-web";
import { TokenContext, UsernameContext } from "../Context/Context";

export default function SignOutScreen() {
    
    const [username, setUsername] = useContext(UsernameContext);
    const [token, setToken] = useContext(TokenContext);

    const signOut = () => {
        setToken(null);
        setUsername("")
        
        console.log("sign out")
    }
    
    return (
        <View>
            <Button
                title="Se déconnecter"
                onPress={signOut}
            />
        </View>
    );
}
