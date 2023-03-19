import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text } from 'react-native';

export default function SpentCard({spentName, spentValue}) {
 return (
   <View style={styles.spentCard}>
       <Text style={styles.spentName}>{spentName}</Text>
       <Text style={styles.spentValue}>R$ {spentValue}</Text>
   </View>
  );
}