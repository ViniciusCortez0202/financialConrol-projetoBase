import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    spentCard: {
        width: '100%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#e3e3e3',
        elevation: 4,
    },
    spentName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        opacity: 0.75
    },
    spentValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        opacity: 0.95
    }
});