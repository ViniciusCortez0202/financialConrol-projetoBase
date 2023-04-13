import React from 'react';
import { Button, Modal, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { SpentContext } from '../../routes/Tabs';

import SpentModal from './components/spentModal';
import List from './components/list';
import { styles } from './style';

export default function AllSpentsPage({navigation}) {

  const [data, setData] = React.useState([
    {
    id: 1,
    spentName: "Feira",
    spentValue: 750,
    },
    {
      id: 2,
      spentName: "Aluguel",
      spentValue: 850,
    },
    {
      id: 3,
      spentName: "Carro",
      spentValue: 1200,
    },
    {
      id: 4,
      spentName: "Escola",
      spentValue: 350,
    }
  ])

  const onSave = (value) => {
    newSpent = {
      id: data.length+1,
      spentName: value,
      spentValue: 0
    }
    setData([...data, newSpent]);
  }

  const onRemove = (id) => {
    const newData = data.filter((element) => element.id != id) 
    setData(newData);
  }

  const {modalVisible, setModalVisible} = React.useContext(SpentContext);

 return (
   <View style={styles.container}>
      <SpentModal modalVisible={modalVisible} setModalVisible={setModalVisible} onSave={onSave}/>
      <List data={data} onRemove={onRemove} navigation={navigation}/>
   </View>
  );
}