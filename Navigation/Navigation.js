import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Pressable, View } from "react-native";
import { Button, StyleSheet } from "react-native-web";
import HomeScreen from "../Screen/HomeScreen";
import LogInScreen from "../Screen/LogInScreen";
import LogOutScreen from "../Screen/LogOutScreen";
import SignInScreen from "../Screen/SignInScreen";
import TodoListScreen from "../Screen/TodoListScreen";

function customTabBar({ navigation }) {
    return (
        <View
			style={styles.tabBar}
        >
            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <FontAwesome name="home" size={24} color="black" />
                </Pressable>
            </View>

            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("SignIn")}>
                    <FontAwesome name="sign-in" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.tabBarIcon}>
                <Button
                    title="Log In"
                    onPress={() => navigation.navigate("LogIn")}
                />
            </View>

            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("LogOut")}>
                    <FontAwesome name="sign-out" size={24} color="black" />
                </Pressable>
            </View>

            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("Todos")}>
                    <FontAwesome5 name="tasks" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" tabBar={customTabBar}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="SignIn" component={SignInScreen} />
                <Tab.Screen name="LogIn" component={LogInScreen} />
                <Tab.Screen name="LogOut" component={LogOutScreen} />
                <Tab.Screen name="Todos" component={TodoListScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: "red",
		padding: 1,
		gap: 2,
	},
    tabBarIcon: {
        backgroundColor: "white",
        flex: 0.2,
		justifyContent: "center",
		textAlign: "center",
    },
});
