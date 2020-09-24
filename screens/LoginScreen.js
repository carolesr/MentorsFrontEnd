import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import * as UserService from '../services/UserService'

const LoginScreen = props => {

    const idCard = props.navigation.getParam('idCard');
    const [email, setEmail] = useState("")

    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Since it's your first time paying with card, please sign up with your email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                placeholder={'Please type your email'}
            />
            <TouchableOpacity activeOpacity={0.4} onPress={() => {
                var user = {
                    "idCard": parseInt(idCard),
                    "username": email
                }

                var json = JSON.stringify(user)
                UserService.CreateUser(json)
                .then(response => console.log(response))
                .catch(e => console.error(e))

                props.navigation.goBack();
                }}>
                <Text style={styles.textButton}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 100,
        //marginBottom: 150
    },
    textButton: {
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 100,
        backgroundColor: "#002c4f",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#002c4f",
    },
    text: {
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: 'center'
    },
    input: {
        height: 50,
        width: '70%',
        borderWidth: 2,
        borderRadius: 6,
        borderColor: "#002c4f",
        paddingHorizontal: 10,
        textAlign: 'center'
    }
});

export default LoginScreen