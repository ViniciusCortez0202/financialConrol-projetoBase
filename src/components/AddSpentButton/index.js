import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { styles } from './style';

export default function AddSpentButton({title, onPress}) {
 return (
   <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress}>
     <Text style={styles.title}>{title}</Text>
   </TouchableOpacity>
  );
}