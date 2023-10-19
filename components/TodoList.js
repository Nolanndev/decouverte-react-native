import React, { useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import todoData from "../Helpers/todoData";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [filters, setFilters] = useState("all");
    const [todos, setTodos] = useState(todoData);
    const [viewTodos, setViewTodos] = useState([...todoData].sort((a,b) => a.done - b.done));
	const [count, setCount] = useState(
        todos.filter((item) => item.done).length
    );
    const [newTodoText, setNewTodoText] = useState("");

    const updateItem = (id) => {
        const newTodos = todos.map((item) => {
            return {
                id: item.id,
                content: item.content,
                done: item.id == id ? !item.done : item.done,
            };
        });
        switch (filters) {
            case "done":
                viewDone();
                break;
            case "progress":
                viewInProgress();
                break;
            default:
                viewAll();
                break;
        }

        setTodos(newTodos);
        setCount(newTodos.filter((item) => item.done).length);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((item) => item.id != id);
        setTodos(newTodos);
        setCount(newTodos.filter((item) => item.done).length);
    };

    const addNewTodo = () => {
        if (newTodoText == "") return;
        setTodos([
            ...todos,
            {
                id: todos.length
                    ? Math.max(...todos.map((item) => item.id)) + 1
                    : 1,
                content: newTodoText,
                done: false,
            },
        ]);
        setNewTodoText("");
    };

    const checkAll = () => {
        const newTodos = viewTodos.map((item) => {
            return { id: item.id, content: item.content, done: true };
        });
        setTodos(newTodos);
        setCount(newTodos.length);
        setViewTodos(newTodos);
    };

    const checkNone = () => {
        const newTodos = todos.map((item) => {
            return { id: item.id, content: item.content, done: false };
        });
        setCount(0);
        setTodos(newTodos);
        setViewTodos(newTodos);
    };

    const viewAll = () => {
        setFilters("all");
        setViewTodos([...todos].sort((item1, item2) => item1.done - item2.done));
    };
    const viewDone = () => {
        setFilters("done");
        setViewTodos(todos.filter((todo) => todo.done));
    };
    const viewInProgress = () => {
        setFilters("progress");
        setViewTodos(todos.filter((todo) => !todo.done));
    };

    return (
        <View style={{ margin: 10 }}>
            <View style={styles.filterView}>
                <Button onPress={viewAll} title="view all" />
                <Button onPress={viewDone} title="view done" />
                <Button onPress={viewInProgress} title="view in progress" />
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
        </View>
    );
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
});
