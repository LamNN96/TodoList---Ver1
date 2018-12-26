import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TaskDetail extends Component {
    static navigationOptions = {
        title: 'Detail'
    }
    constructor(props) {
        super(props);
        // const data = this.props.navigation.getParam('data', {})
        this.state = {
            title:'',
            description: '',
        };
    }
    returnData(title, description) {
        this.setState({ title: title, description: description });
    }
    componentDidUpdate() {
        this.props.navigation.state.params.returnData(this.state.title, this.state.description);
    }
    componentDidMount() {
        const data = this.props.navigation.getParam('data', {})
        this.setState({
            title: data.title,
            description: data.description,
        });
    }
    render() {
        console.log('TaskDetail')
        return (
            <View>
                <Text onPress={() => {
                    this.props.navigation.navigate("EditTask", {
                        data: {
                            title: this.state.title,
                            description: this.state.description
                        },
                        returnData: this.returnData.bind(this)
                    })
                }}> {this.state.title} </Text>
                <Text> {this.state.description} </Text>
            </View>
        );
    }
}
