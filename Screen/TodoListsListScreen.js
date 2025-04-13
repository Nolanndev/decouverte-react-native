import React, { useContext, useEffect, useState } from "react";
import {View, Text, Button, FlatList, TextInput} from 'react-native';
import {getTodoLists, createTodoList} from "../js/todoList";
import { UsernameContext, TokenContext } from "../Context/Context";
import TodoList from "../components/TodoList";
import TodoListItem from "../components/TodoListItem";

export default function TodoListsListScreen() {
    
    const [username, setUsername] = useContext(UsernameContext);
    const [token, setToken] = useContext(TokenContext);
    const [todoLists, setTodoLists] = useState([]);
    const [newTodoList, setNewTodoList] = useState("");

    const query = () => {
        getTodoLists(username, token)
        .then(r => {
            setTodoLists(r);
        })
        .catch(e => {
            console.error(e);
        });
    }

    const addTodoList = () => {
        createTodoList(username, newTodoList, token)
            .then(response => {
                console.log(response)
                query();
            })
            .catch(err => {
                console.error(err)
            });
        setNewTodoList("");
    }
    
    useEffect(() => query(), [])

    const updateList = () => {
        query();
    }

    return (
        <View>
            <TextInput
                onChangeText={setNewTodoList}
                placeholder="Ajouter une liste"
                onSubmitEditing={addTodoList}
                value={newTodoList}
            />
            <Button
                title="Ajouter Todo"
                onPress={addTodoList}
            />

            <FlatList
                style={{ paddingLeft: 10 }}
                data={todoLists}
                renderItem={({ item }) => (
                    <TodoListItem 
                        todoList={item}
                        updateList={updateList}
                    />
                )}
            />

            <Text>------------------------------------------</Text>

            <TodoList 
                data = {[
                    {id: 1,content: "faire ses devoirs", done: true},
                    {id: 2,content: "ranger sa chambre", done: false},
                    {id: 3,content: "essuyer la vaisselle", done: false},
                    {id: 4,content: "tâche de test", done: true}
                ]}
            />
        </View>
    );
}