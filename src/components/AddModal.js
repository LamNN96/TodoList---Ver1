import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import DateTimePicker from 'react-native-modal-datetime-picker';
var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            data: {
                'name': '',
                'description': '',
                'date': ''
            }
        };
    }
    showAddModal = () => {
        this.refs.addModal.open();
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };
    render() {
        return (
            <Modal
                ref={'addModal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 240
                }}
                position='center'
                backdrop={true}
                onClosed={() => {

                }}
            >
                <Text style={{
                    marginTop: 30,
                    fontSize: 25,
                    textAlign: 'center',
                }}>Add Task</Text>
                <TextInput
                    ref = 'inputTitle'
                    onSubmitEditing = {()=>this.refs.inputD}
                    style={{
                        marginStart: 10,
                        marginEnd: 10,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1
                    }}
                    placeholder="Enter title..."
                    // value={this.state.newFoodName}
                    onChangeText={(text) => {
                        this.setState({
                        })
                    }}
                    >
                </TextInput>

                <TextInput
                    ref = 'inputDescription'
                    style={{
                        marginStart: 10,
                        marginEnd: 10,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1
                    }}
                    placeholder="Enter description..."
                    // value={this.state.newDescription}
                    onChangeText={(text) => {
                        this.setState({
                        })
                    }}
                >
                </TextInput>

                <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <Text>Show DatePicker</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                </View>

                <Button
                    style={{ fontSize: 16, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginTop: 30,
                        marginStart: 70,
                        marginBottom: 20,
                        marginEnd: 70,
                        borderRadius: 5,
                        backgroundColor: 'mediumseagreen',
                    }}

                    onPress={() => {
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>

            </Modal>
        );
    }
}
