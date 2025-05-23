import React, { useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import TodoItem from "./TodoItem";
import { Bar } from "react-native-progress";

export default function TodoList(props) {
    const [filter, setfilter] = useState("all");
    const [todos, setTodos] = useState(props.data);
    const [viewTodos, setViewTodos] = useState([...props.data].sort((item1, item2) => item1.done - item2.done));
    const [count, setCount] = useState(
        todos.filter((item) => item.done).length
    );
    const [newTodoText, setNewTodoText] = useState("");
    const [progress, setProgress] = useState((props.data.filter(item => item.done).length) / props.data.length);

    const updateItem = (id) => {
        const newTodos = todos.map((item) => {
            return {
                id: item.id,
                content: item.content,
                done: item.id == id ? !item.done : item.done,
            };
        });
        setTodos(newTodos);
        updateView(newTodos, filter);
        setProgress(newTodos.length);
        setCount(newTodos.filter((item) => item.done).length);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((item) => item.id != id);
        setTodos(newTodos); // modifier mes données
        updateView(newTodos, filter);
        setProgress(newTodos.length);
        setCount(newTodos.filter((item) => item.done).length);
    };

    const addNewTodo = () => {
        if (newTodoText == "") return;
        const newTodos = [
            ...todos,
            {
                id: todos.length
                    ? Math.max(...todos.map((item) => item.id)) + 1
                    : 1,
                content: newTodoText,
                done: false,
            },
        ];
        setTodos(newTodos);
        updateView(newTodos, filter);
        setProgress(newTodos.length);
        setNewTodoText("");
    };

    const checkAll = () => {
        const newTodos = todos.map((item) => {
            return { id: item.id, content: item.content, done: true };
        });
        setCount(newTodos.length);
        setTodos(newTodos);
        setProgress(newTodos.length);
        updateView(newTodos, filter);
    };

    const checkNone = () => {
        const newTodos = todos.map((item) => {
            return { id: item.id, content: item.content, done: false };
        });
        setCount(0);
        setTodos(newTodos);
        setProgress(newTodos.length);
        updateView(newTodos, filter);
    };

    const updateView = (newTodos, val = "all") => {
        switch (val) {
            case "done":
                setfilter(val);
                setViewTodos(newTodos.filter((todo) => todo.done));
                break;
            case "progress":
                console.table(newTodos);
                setfilter(val);
                setViewTodos(newTodos.filter((todo) => !todo.done));
                break;
            default:
                setfilter(val);
                setViewTodos(newTodos.sort((item1, item2) => item1.done - item2.done ));
                break;
        }
    };

    return (
        <View style={{ margin: 10 }}>
            <View style={styles.filterView}>
                <Button
                    onPress={() => {
                        updateView([...todos], "all");
                    }}
                    title="view all"
                />
                <Button
                    onPress={() => {
                        updateView([...todos], "done");
                    }}
                    title="view done"
                />
                <Button
                    onPress={() => {
                        updateView([...todos], "progress");
                    }}
                    title="view in progress"
                />
            </View>
            <View style={styles.checkButtons}>
                <Button onPress={checkAll} title="check all" />
                <Button onPress={checkNone} title="check none" />
            </View>
            <Text>{count} items réalisés</Text>
            <View style={styles.textInput_group}>
                <View>
                    <TextInput
                        style={styles.textinput_view}
                        onChangeText={setNewTodoText}
                        placeholder="saisir ici un nouvel item"
                        onSubmitEditing={addNewTodo}
                        value={newTodoText}
                    />
                </View>
                <View style={styles.buttoninput_view}>
                    <Button onPress={addNewTodo} title="new" />
                </View>
            </View>
            <FlatList
                style={{ paddingLeft: 10 }}
                data={viewTodos}
                renderItem={({ item }) => (
                    <TodoItem
                        item={item}
                        updateItem={updateItem}
                        deleteTodo={deleteTodo}
                    />
                )}
            />
            {/* <TouchableOpacity onPress={() => console.log("ajouter une todo")} style={styles.addTodoButton}>
                <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity> */}
            <Bar progress={progress} width={200} />
        </View>
    );<Image
    source={require("../assets/trash-can-outline.png")}
    style={{ height: 24, width: 24 }}
/>
}

const styles = StyleSheet.create({
    textInput_group: {
        flexDirection: "row",
    },
    textinput_view: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttoninput_view: {
        margin: 12,
        paddingTop: 3,
    },
    checkButtons: {
        flexDirection: "row",
        gap: 10,
    },
    filterView: {
        flexDirection: "row",
        gap: 10,
    },
    addTodoButton :{
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "red",
        padding: 15,
    },
});
