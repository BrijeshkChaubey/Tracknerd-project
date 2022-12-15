import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    Image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    Title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        height: 40,
        width: 200,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        height: 60,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        margintop: 20,
        zIndex: 100,
        elevation: 2,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }


})
export default styles;