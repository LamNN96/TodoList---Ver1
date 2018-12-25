import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TaskDetail extends Component {
    static navigationOptions  = {
        title : 'Detail'
    }
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const data = this.props.navigation.getParam('data', {})
        return (
            <View>
                <Text> {data.title} </Text>
                <Text> {data.description} </Text>
                <Text> {data.date} </Text>
            </View>
        );
    }
}
