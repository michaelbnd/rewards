/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {TasksScreen} from '../screens/TaskScreen';
import {RewardsScreen} from '../screens/RewardsScreen';

type BottomTabParamList = {
  Rewards: undefined;
  Tasks: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Tasks"
      tabBarOptions={{activeTintColor: '#000'}}>
      <BottomTab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarLabel: 'Tâches',
          tabBarIcon: ({color}) => (
            <TabBarIcon name="checkmark-circle" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="basket" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}
