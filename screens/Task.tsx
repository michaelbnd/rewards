import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export class Tasks extends Component {
    state = {
        points: 100,
    };

    tasks = [
        {
            text: 'Completer reporting',
            point: 100,
        },
        {
            text: 'Finir Sprint',
            point: 100,
        },
        {
            text: 'Faire des taches en plus',
            point: 500,
        },
    ];

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Taches</Text>
                <Text style={styles.subTitle}>Vous avez {this.state.points} points </Text>
                <Text style={styles.subTitle}>Pour gagner plus de point vous pouvez faire </Text>
                {this.tasks.map((task, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.task}>
                            <Text style={styles.taskTitle}>{task.text}</Text>
                            <Text style={styles.taskInfo}>Pour {task.point} points</Text>
                        </TouchableOpacity>
                    );
                })}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 32,
        alignSelf: 'center',
        fontSize: 18,
    },
    task: {
        padding: 10,
        fontSize: 18,
        alignSelf: 'stretch',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 16,
        margin: 10
    },
    taskTitle: {
        fontSize: 18
    },
    taskInfo: {
        alignSelf: 'flex-end'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

