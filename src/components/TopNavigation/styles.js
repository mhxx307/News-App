import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 80,
    },
    text: {
        fontSize: 16,
    },
    right: {
        width: 80,
        alignItems: 'flex-end',
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: '#007fff',
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '700',
    },
});

export default styles;
