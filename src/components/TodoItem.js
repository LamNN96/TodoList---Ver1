import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.item,
            isSelected: false,
            index: this.props.index
        };
    }

    _onItemClick() {
        this.props.navigation.navigate('Detail', { data: this.state.data, returnData: this.returnData.bind(this) })
    }

    returnData(title, description) {
        let data = {
            title: title,
            description: description
        }
        this.setState({ data: { title: title, description: description } });
        this.props.handleData(data, this.state.index);
    }

    render() {
        console.log('TodoItem')
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

