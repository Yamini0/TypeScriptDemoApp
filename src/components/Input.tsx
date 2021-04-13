import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
  icon: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View
        style={styles.viewStyle}>
        <Ionicons
          style={{ padding: 5 }}
          name={props.icon}
          size={22}
          color="#555"
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput
          style={{ padding: 5 }}
          placeholderTextColor="#550"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    borderWidth: 1.5,
    borderColor: '#aaa',
    borderRadius:10

  },
  viewStyle:{
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',

  }
});
