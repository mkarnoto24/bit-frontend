import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';

// parent component
class Todo extends Component {

    constructor() {
        super();
        this.state = {
            inputName: "",
            data: []
        }
    }

    async componentDidMount() {

    }

    handlePress = () => {
        const afterPush = this.state.data;
        afterPush.push(this.state.inputName);
        this.setState({
            data: afterPush,
            inputName: ''
        })
    }

    handleChange = (text) => {
        this.setState({
            inputName: text
        })
    }
    handleDelete = () => {
        alert('test');
    }

    renderItem = ({ item }) => {
        return (
            <View onPress={this.handleDelete}>
                <Item value={item}></Item>
            </View>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.handleChange}
                    value={this.state.inputName}
                />
                <Button
                    title="ADD"
                    onPress={this.handlePress}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

// child component 
class Item extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>This is {this.props.value}</Text>
            </View>
        )
    }
}

export default Todo;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    item: {
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    itemText: {
        fontWeight: 'bold'
    }
})