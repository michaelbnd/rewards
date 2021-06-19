import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//import {RootSiblingParent} from 'react-native-root-siblings';
import {RootSiblingParent} from 'react-native-root-siblings';

import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <Navigation />
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}
