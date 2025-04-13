import React, { useContext, useEffect } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { deleteTodoList } from "../js/todoList";
import { TokenContext } from "../Context/Context";

export default function TodoListItem(props) {

    const [token, setToken] = useContext(TokenContext)

    const useTodoList = () => {

    }

    const del = () => {
        // deleteTodoList()
        console.log(props.todoList)
        deleteTodoList(props.todoList.id, token)
            .then(r => { props.updateList() })
            .catch(err => console.error(err))

    }

    return (
        <View style={{borderWidth: 1, borderColor: "black", margin: 5, flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity onPress={useTodoList}>
                <Text>{props.todoList.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={del}>
                <Text>Supprimer</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});
