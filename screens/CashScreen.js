import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CashScreen = props => {
    
    const purchase = props.navigation.getParam('purchase');

    useEffect(() => {

        purchase.method = "cash"
        console.log('post:')
        console.log(purchase)
        var json = JSON.stringify(purchase)
        console.log(json)

        let url = 'https://cinqbreak.herokuapp.com/api/Purchase/Create'
        let headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        fetch(url, 
            {headers: headers, method: 'POST', body: json})
        .then(response => response.json())
        .then(responseJson => {
            console.log('SUCCESS')
            console.log(responseJson)
        })
        .catch(e => {
            console.log('FAILURE')
            console.log(e)
        })

    },[])

    return (
        <View style={styles.screen}>
            <View style={styles.priceContainer}>                
                <Text style={styles.text}>Your total is</Text>
                <Text style={styles.textPrice}>R${purchase.total.toFixed(2)}</Text>
            </View>
            <Text style={styles.text}>Put your cash in the box and take change if needed</Text>
            <View style={styles.priceContainer}>                
                <Text style={styles.text}>Thank you!</Text>
                <Text style={styles.text}>Enjoy your break!</Text>
            </View>

            <View style={styles.bottomButtons}>                
                <View style={styles.textButtonContainer}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {
                            props.navigation.popToTop();
                        }}>
                        <View  >
                            <Text style={styles.textButton}>FINISH</Text>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 70
    },
    text: {
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: 'center'
    },
    textPrice: {        
        fontSize: 25,
        marginHorizontal: 50,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    priceContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '20%'
    },
    bottomButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: '12%'
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

export default CashScreen