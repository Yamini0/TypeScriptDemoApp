import React, { FC } from 'react';
import { Fruit } from '../data/Data';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('screen');
const ListItem: FC<Fruit> = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.listItem,
          alignItems: 'flex-start',
        }}>
        <Text style={{color:'#595959'}}>{props.name}</Text>
      </View>
      <View
        style={{
          ...styles.listItem,
        alignItems: 'flex-end',
        }}>
        <Text>{props.price}</Text>
      </View>
    </View>
  );
};
export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:width/1.05,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    padding: 10,
  },
  listItem: {
    flex: 0.5,
    justifyContent: 'center',
  },
  item: {
    padding: 5,
    fontWeight: '600',
    fontSize: 16,
  },
});
