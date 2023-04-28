import {useEffect} from 'react';
import {StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView} from 'react-native';

const Communicate = function ({route, navigation}) {
    const {name, theme} = route.params;
    useEffect(function () {
        navigation.setOptions({title: `${name}'s Messages`});
    }, []);
    return (
        /*Container Of Everything With Background From Route*/
        <KeyboardAvoidingView style={[styles.all, {backgroundColor: theme}]}>
            {/*Sample White Text For Testing Colour Contrast*/null}
            <View style={[styles.page, {backgroundColor: theme}]}><Text style={[styles.h3, styles.white]}>{name} wants to communicate</Text></View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    all: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%'
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    contentSurround: {
        flex: 5,
        width: '75%',
        backgroundColor: '#FFF',
        marginBottom: '12.5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoSurround: {
        width: '75%',
        flex: 6,
        marginTop: '12.5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000000'
    },
    white: {
        color: '#FFF'
    },
    h1: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    p: {
        fontSize: 20
    },
    typeBox: {
        width: '80%',
        backgroundColor: '#000',
        color: '#FFF',
        height: 35,
        borderRadius: 17.5,
        paddingLeft: 15,
        paddingRight: 15
    },
    b: {
        fontWeight: 'bold'
    },
    themeCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    themeCircleSelected: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: '#FFF'
    },
    isolated: {
        marginTop: 2.5,
        marginBottom: 2.5
    },
    hIsolated: {
        marginLeft: 2.5,
        marginRight: 2.5
    },
    button: {
        backgroundColor: '#114232',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    themeRow: {
        flexDirection: 'row'
    }
});

export default Communicate;