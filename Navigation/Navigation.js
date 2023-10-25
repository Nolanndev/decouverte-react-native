import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native-web";
import HomeScreen from "../Screen/HomeScreen";
import SignInScreen from "../Screen/SignInScreen";
import SignUpScreen from "../Screen/SignUpScreen";
import SignOutScreen from "../Screen/SignOutScreen";
import TodoListsListScreen from "../Screen/TodoListsListScreen";
import { TokenContext, UsernameContext } from "../Context/Context";

function TabBarNotLogged({ navigation }) {
    return (
        <View style={styles.tabBar}>
            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("SignIn")}>
                    <FontAwesome name="sign-in" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <AntDesign name="login" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}
function TabBarLogged({ navigation }) {
    return (
        <View style={styles.tabBar}>
            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <FontAwesome name="home" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("TodoLists")}>
                    <FontAwesome5 name="tasks" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.tabBarIcon}>
                <Pressable onPress={() => navigation.navigate("SignOut")}>
                    <FontAwesome name="sign-out" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Navigation () {
    return (
      <TokenContext.Consumer>
        {([token, setToken]) => (
          <NavigationContainer>
            {token == null ? (
              <Tab.Navigator tabBar={TabBarNotLogged}>
                <Tab.Screen name='SignIn' component={SignInScreen} />
                <Tab.Screen name='SignUp' component={SignUpScreen} />
              </Tab.Navigator>
            ) : (
              <Tab.Navigator tabBar={TabBarLogged}>
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='TodoLists' component={TodoListsListScreen} />
                <Tab.Screen name='SignOut' component={SignOutScreen} />
              </Tab.Navigator>
            )}
          </NavigationContainer>
        )}
      </TokenContext.Consumer>
    )
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
