import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AppRegistry } from 'react-native';

import * as signalR from '@microsoft/signalr';
import * as PurchaseService from '../services/PurchaseService'

import WaitingCardComponent from '../components/WaitingCardComponent';
import ApprovedComponent from '../components/ApprovedComponent';

const CardScreen = props => {
    
    const purchase = props.navigation.getParam('purchase');
    const [component, setComponent] = useState(<WaitingCardComponent/>)
    const [button, setButton] = useState('BACK')

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://cinqbreak.herokuapp.com/hub")
        .configureLogging(signalR.LogLevel.Information)
        .build();
        try {
            connection.start();
            console.log("connected");
        } catch (err) {
            console.log(err);
            setTimeout(() => start(), 5000);
        }        
        connection.onclose(async() => {
            await start();
        });
        
        connection.on("Teste", (message) => {
            console.log("TESTE => " + message)
        })

        connection.on("Login", (idcard) => {
            console.log("LOGIN => " + idcard)
            setComponent(<ApprovedComponent/>)
            setButton('FINISH')
            props.navigation.push("LoginScreen", { idCard: idcard});
        })
        
        connection.on("Finish", (message) => {
            console.log("FINISH => " + message)
            setComponent(<ApprovedComponent/>)
            setButton('FINISH')
        })

        purchase.method = "card"
        purchase.pending = "true"
        var json = JSON.stringify(purchase)

        PurchaseService.CreatePurchase(json)
        .then(response => console.log(response))
        .catch(e => console.error(e))

    }, [])

    return (
        <View style={styles.screen}>

            {component}
            
            <View style={styles.bottomButtons}>
                <View style={styles.textButtonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.4} 
                        onPress={() => {
                            if (button == 'BACK')
                                props.navigation.goBack();
                            else if (button == 'FINISH') {
                                props.navigation.popToTop();
                            }
                        }}>
                        <View>
                            <Text style={styles.textButton}>{button}</Text>
                        </View>
                    </TouchableOpacity>
                </View>      
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 70
    },
    bottomButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: '13%'
    },
    textButtonContainer: {
        minWidth: '23%',
        marginHorizontal: 10
    },
    textButton: {
        color: 'white',
        backgroundColor: "#002c4f",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#002c4f",
        minHeight: '70%',
        textAlign: 'center',
        textAlignVertical: 'center'        
    }
});

export default CardScreen