import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }
    componentWillMount() {
        const data = this.props.navigation.getParam('data', {})
        this.setState({
            title: data.title,
            description: data.description
        })
    }
    componentDidUpdate() {
        this.props.navigation.state.params.returnData(this.state.title, this.state.description);
    }
    render() {
        console.log('edit')
        return (
            <View>
                <Text> Title </Text>
                <TextInput
                    value={this.state.title}
                    onChangeText={(text) => {
                        this.setState((preState) => {
                            return {
                                title: text,
                                description: preState.description
                            }
                        })
                    }}
                ></TextInput>
                <Text> Description </Text>
                <TextInput
                    value={this.state.description}
                    onChangeText={(text) => {
                        this.setState((preState) => {
                            return {
                                title: preState.title,
                                description: text
                            }
                        })
                    }}
                ></TextInput>
            </View>
        );
    }
}
