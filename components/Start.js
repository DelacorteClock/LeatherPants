import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView} from 'react-native';

const Start = function ({navigation}) {
    //Colour theme state
    const [theme, setTheme] = useState('#000000');
    //User's display name state
    const [name, setName] = useState('');
    useEffect(function () {
        navigation.setOptions({headerShown: false});
    }, []);
    return (
        /*Container Of Everything*/
        <KeyboardAvoidingView style={styles.all}>
            {/*A Background For Good Contrast*/null}
            <ImageBackground source={require('../assets/back.jpg')} style={styles.image}>
                <View style={styles.page}>
                    {/*Contain Key Logo (Maybe Replace With SVG Logo In Future)*/null}
                    <View style={styles.logoSurround}>
                        <Text style={[styles.white, styles.h1]}>LeatherPants</Text>
                    </View>
                    {/*Contain Form For Display Name And Theme*/null}
                    <View style={styles.contentSurround}>
                        {/*Display Name Section*/null}
                        <Text style={[styles.b, styles.p, styles.isolated]}>Your Display Name</Text>
                        <TextInput value={name} onChangeText={setName} placeholder='Type Display Name' style={[styles.typeBox, styles.p, styles.isolated]}></TextInput>
                        {/*Theme Selection Section*/null}
                        <Text style={[styles.b, styles.p, styles.isolated]}>Theme Selection</Text>
                        {/*Flex-Direction Row Container Of Colour Choices*/null}
                        <View style={styles.themeRow}>
                            <TouchableWithoutFeedback onPress={function () {setTheme('#000000');}}>
                                <View style={[styles.hIsolated, styles.isolated, styles.themeCircle, {backgroundColor: '#000000'}]}>
                                    {theme === '#000000' ? <View style={styles.themeCircleSelected}></View> : null}
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={function () {setTheme('#6E3219');}}>
                                <View style={[styles.hIsolated, styles.isolated, styles.themeCircle, {backgroundColor: '#6E3219'}]}>
                                    {theme === '#6E3219' ? <View style={styles.themeCircleSelected}></View> : null}
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={function () {setTheme('#A65A2A');}}>
                                <View style={[styles.hIsolated, styles.isolated, styles.themeCircle, {backgroundColor: '#A65A2A'}]}>
                                    {theme === '#A65A2A' ? <View style={styles.themeCircleSelected}></View> : null}
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={function () {setTheme('#AF8050');}}>
                                <View style={[styles.hIsolated, styles.isolated, styles.themeCircle, {backgroundColor: '#AF8050'}]}>
                                    {theme === '#AF8050' ? <View style={styles.themeCircleSelected}></View> : null}
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={function () {setTheme('#D0B084');}}>
                                <View style={[styles.hIsolated, styles.isolated, styles.themeCircle, {backgroundColor: '#D0B084'}]}>
                                    {theme === '#D0B084' ? <View style={styles.themeCircleSelected}></View> : null}
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={function () {setTheme('#CE8E00');}}>
                                <View style={[styles.hIsolated, styles.isolated, styles.themeCircle, {backgroundColor: '#CE8E00'}]}>
                                    {theme === '#CE8E00' ? <View style={styles.themeCircleSelected}></View> : null}
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableWithoutFeedback onPress={function () {if (name) {navigation.navigate('Communicate', {name: name, theme: theme});};}}>
                            <View style={[styles.button, styles.isolated]}>
                                <Text style={[styles.white, styles.h3]}>GO</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    all: {
        flex: 1
    },
    page: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
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

export default Start;