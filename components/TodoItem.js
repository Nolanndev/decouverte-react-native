import React, { useEffect, useState } from "react";
import {
	Image,
	StyleSheet,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function TodoItem(props) {
    const [done, setDone] = useState(props.item.done);

     const changeDone = (state) => {
		setDone(state);
	 }

    useEffect(() => {
      changeDone(props.item.done)
    }, [props.item.done]);

    return (
        <View style={styles.content}>
            <Switch
                value={done}
                onValueChange={(state) => {
                    setDone(state);
                    props.updateItem(props.item.id);
                }}
            />
            <Text
                style={[
                    styles.text_item,
                    { textDecorationLine: done ? "line-through" : "none" },
                ]}
            >
                {props.item.content}
            </Text>
            <TouchableOpacity onPress={() => props.deleteTodo(props.item.id)}>
                <Image
                    source={require("../assets/trash-can-outline.png")}
                    style={{ height: 24, width: 24 }}
                />
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
    },
    text_item: {
        marginLeft: 10,
        width: 150,
    },
});
