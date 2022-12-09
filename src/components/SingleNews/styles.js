const { StyleSheet, Dimensions } = require('react-native');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
    },

    image: {
        height: '45%',
        resizeMode: 'cover',
        width: windowWidth,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    content: {
        fontSize: 18,
        paddingBottom: 10,
    },

    footer: {
        height: 80,
        width: windowWidth,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#d7be69',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    description: {
        padding: 15,
        flex: 1,
    },

    readMore: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default styles;
