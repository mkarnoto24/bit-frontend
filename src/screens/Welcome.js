import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Welcome extends Component {

    handlePress = () => {
        this.props.navigation.navigate('Todo');
        // alert('test');
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                {/* <Text>Welcome Screen</Text> */}
                <Button
                    title="Go to Todo App"
                    onPress={this.handlePress}
                />
            </View>
        );
    }
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})