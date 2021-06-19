import React, {Component} from 'react';
import {Header} from '../components/Header';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-root-toast';

export class TasksScreen extends Component {
  state = {
    points: 100,
  };

  tasks = [
    {
      text: 'Complétion du reporting',
      point: 20,
    },
    {
      text: 'Finir Sprint',
      point: 50,
    },
    {
      text: 'Faire des tâches en plus',
      point: 200,
    },
  ];

  private taskClick() {
    Toast.show('Demande envoyée au manager ✅', {
      duration: Toast.durations.LONG,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Tâches" />
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 26,
              marginTop: 16,
              marginLeft: 32,
            }}>
            Vous avez {this.state.points} 👏
          </Text>
          <Text
            style={{
              marginLeft: 32,
              fontSize: 20,
              marginTop: 4,
              marginBottom: 32,
              fontWeight: '500',
              color: '#777',
            }}>
            Gagnez plus de points !
          </Text>
          {this.tasks.map((task, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.task}
                onPress={this.taskClick}>
                <Text style={styles.taskTitle}>{task.text}</Text>
                <Text style={styles.taskInfo}>{task.point} 👏</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
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
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 0,
    marginLeft: 32,
  },
  task: {
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 32,
    padding: 12,
    fontSize: 18,
    alignSelf: 'stretch',
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskInfo: {
    marginTop: 8,
    alignSelf: 'flex-end',
    fontWeight: '600',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
