/* global Platform */

import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {Bubble, GiftedChat, SystemMessage} from 'react-native-gifted-chat';

const Communicate = function ({route, navigation}) {
    const [messages, setMessages] = useState([]);
    const {name, theme} = route.params;
    useEffect(function () {
        navigation.setOptions({title: `${name}'s Messages`});
    }, []);
    useEffect(function () {
        //Default messages to 'welcome' a user
        setMessages([
            {
                _id: 2,
                text: `My name is clothing liker. What is your name?`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Clothing Liker',
                    avatar: 'https://raw.githubusercontent.com/DelacorteClock/bus/main/tld.png'
                }
            }, {
                _id: 1,
                text: `${name}...you entered the LeatherPants message room successfully.`,
                createdAt: 0,
                system: true
            }
        ]);
        }, []);
        const onSend = (newMessages) => {
            //Attach new message to previous ones when sent
            setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
        };
        const renderBubble = (props) => {
            //White background for left side and black background for user's messages highlighted with white outline 
            return (
                <Bubble
                    {...props}
                    textStyle={{right: {color: '#FFF'}, left: {color: '#000'}}}
                    wrapperStyle={{right: {backgroundColor: '#000', borderWidth: 2, borderColor: '#FFF'}, left: {backgroundColor: '#FFF'}}}
                />
            );
        };
        const renderSystemMessage = (props) => {
            //Custom white bold style for system messages
            return (<SystemMessage {...props} textStyle={{color: '#FFF', fontWeight: 'bold'}} />);
        };
        //Premade gifted with custom rendering for bubble and system messages
        return (
            <View style={[styles.all, {backgroundColor: theme}]}>
                <GiftedChat messages={messages} onSend={messages => onSend(messages)} renderBubble={renderBubble} renderSystemMessage={renderSystemMessage} user={{_id: 0}} renderDay={function () {return null;}} renderTime={function () {return null;}} />
                {Platform.OS === 'android' ? <KeyboardAvoidingView behavior='height' /> : null}
            </View>
        );
};

const styles = StyleSheet.create({
    all: {
        flex: 1
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