import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text } from 'react-native';
import { Pressable } from 'react-native';

export default function SpentCard({ spentName, spentValue, onPress, onLongPress }) {
  return (
    <Pressable style={styles.spentCard} onLongPress={onLongPress}>
      <Text style={styles.spentName}>{spentName}</Text>
      <Text style={styles.spentValue}>R$ {spentValue}</Text>
    </Pressable>
  );
}