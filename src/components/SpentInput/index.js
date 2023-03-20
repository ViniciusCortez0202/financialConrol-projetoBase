import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './style';

export default function SpentInput({placeholder, keyboardType, onChangeText}) {
 return (
   <TextInput style={styles.input} placeholder={placeholder } keyboardType={keyboardType} onChangeText={onChangeText}/>
  );
}