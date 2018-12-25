import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, CheckBox } from 'react-native';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.item,
            isSelected: false
        };
    }

    _onItemClick() {
        //TODO: navigate to details with props = 'data'
        this.props.navigation.navigate('Detail', { data: this.props.item })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => { this._onItemClick() }}>
                <View style={{
                    // backgroundColor: this.state.isSelected ? 'blue' : 'yellow',
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    flexDirection: 'row'
                }}>
                    <Text style={{ fontSize: 20, flex: 9 }}> {this.state.data.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

