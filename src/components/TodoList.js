import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import TodoItem from './TodoItem';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
var screen = Dimensions.get('window');
export default class TodoList extends Component {
    static navigationOptions = {
        title: 'Todo List'
    }
    constructor(props) {
        super(props);
        this.dataFromItem = this.dataFromItem.bind(this);
        this.state = {
            isDateTimePickerVisible: false,
            data: [{
                'title': 'Task 1',
                'description': 'Desc 1',
            }],
            item: {
                title: '',
                description: '',
            },
            isAdding: false
        };
    }

    _onAddPress = () => {
        this.showAddModal();
    }

    _onButtonAdd = () => {
        let newData = this.state.data;
        newData.push(this.state.item);
        this.setState(
            {
                data: newData
            }
        )
        this.refs.addModal.close();
        this.setState({
            item: {
                title: '',
                description: '',
            }
        })
    }

    showAddModal = () => {
        this.refs.addModal.open();
    }

    dataFromItem(data, index) {
        let newData = this.state.data;
        newData[index] = data;
        this.setState({
            data: newData
        })
    }

    render() {
        console.log('list')
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.buttonAddContainer}>
                    <TouchableOpacity
                        onPress={() => this._onAddPress()}
                    >
                        <Text>ADD TASK</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    {this.state.data.length === 0 ?
                        <Text style={styles.textEmpty}>Empty!</Text> : <FlatList
                            data={this.state.data}
                            renderItem={
                                ({ item, index }) => {
                                    return (
                                        <TodoItem
                                            item={item}
                                            index={index}
                                            parent={this}
                                            handleData={this.dataFromItem}
                                            navigation={this.props.navigation} />
                                    )
                                }
                            }
                            keyExtractor={item => item.title}
                        />}
                </View>
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
                        ref={'inputTitle'}
                        autoFocus={true}
                        onSubmitEditing={() => this.refs.inputDescription.focus()}
                        style={{
                            marginStart: 10,
                            marginEnd: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1
                        }}
                        placeholder="Enter title..."
                        value={this.state.item.title}
                        onChangeText={(text) => {
                            this.setState((previousState) => {
                                return {
                                    item: {
                                        title: text,
                                        description: previousState.item.description,
                                        date: previousState.item.date
                                    }
                                }
                            })
                        }}
                    >
                    </TextInput>

                    <TextInput
                        ref={'inputDescription'}
                        style={{
                            marginStart: 10,
                            marginEnd: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1
                        }}

                        placeholder="Enter description..."
                        value={this.state.item.description}
                        onChangeText={(text) => {
                            this.setState((previousState) => {
                                return {
                                    item: {
                                        title: previousState.item.title,
                                        description: text,
                                        date: previousState.item.date
                                    }
                                }
                            })
                        }}
                    >
                    </TextInput>

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
                            this._onButtonAdd();
                        }}
                    >
                        Save
                </Button>

                </Modal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textEmpty: {
    },
    buttonAddContainer: {
        height: 25,
    },
    listContainer: {
        flex: 1,
    },
    inputContainer: {

    }

})