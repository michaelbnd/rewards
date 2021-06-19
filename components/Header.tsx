import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  title: string;
};
export function Header({title}: Props) {
  return (
    <View style={{paddingTop: 32, paddingLeft: 32}}>
      <Text style={{fontSize: 48, fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
}
