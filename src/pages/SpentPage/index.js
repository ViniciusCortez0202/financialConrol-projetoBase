import React, { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { styles } from './style';
import { FlatList } from 'react-native';
import SpentInput from '../../components/SpentInput';
import AddSpentButton from '../../components/AddSpentButton';
import SpentCard from '../../components/SpentCard';
import { object, string, number, decimal, InferType } from 'yup';
import { ActivityIndicator } from 'react-native';


export default function SpentPage() {

    const [updateSpents, setUpdateSpents] = useState(false);
    let spentName = "";
    let spentValue = 0;

    const [data, setData] = useState([
        {
            id: 0,
            spentName: "Aluguel",
            spentValue: 500.00
        }
    ])

    let schema = object().shape(
        {
            spentName: string()
                .required("É necessario adicionar um nome para adicionar um gasto."),
            spentValue: number("O valor do gasto precisa ser um número.")
                .required("É necessario adicionar um valor para adicionar um gasto.")
                .positive("Só é permitido adicionar valoes positivos.")
        })
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SpentInput placeholder="Nome do gasto" onChangeText={(value) => { spentName = value }} />

                <SpentInput placeholder="Valor do gasto" keyboardType="decimal-pad"
                    onChangeText={(value) => { spentValue = value }} />

                <AddSpentButton title="Adicionar" onPress={async () => {

                    setUpdateSpents(true);
                    const newSpent = { spentName: spentName, spentValue: spentValue };
                    const validator = await schema.isValid({ spentName: spentName, spentValue: spentValue });
                    console.log(validator)
                    if (validator) {
                        newSpent.id = data.length;
                        setData([...data, newSpent]);
                    } else {
                        console.log("error")
                    }
                    setUpdateSpents(false);
                }} />
            </View>
            <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={-100} style={styles.list}>
                {
                    updateSpents ? <ActivityIndicator size={'large'} />
                        : <FlatList
                            data={data}
                            renderItem={({ item }) => <SpentCard spentName={item.spentName} spentValue={item.spentValue} />}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={<View style={{height: 10}}/>}
                        />
                }
            </KeyboardAvoidingView>
        </View>
    );
}