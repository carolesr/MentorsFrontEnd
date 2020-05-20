import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentScreen = props => {
    
    const total = props.navigation.getParam('total');

    return (
        <View style={styles.screen}>
            
            <View>
                <Text style={styles.text}>Select payment method:</Text>
            </View>

            <View style={styles.paymentButtons}>
                <View style={styles.textButtonPaymentContainer}>
                    <TouchableOpacity
                        activeOpacity={0.4} 
                        onPress={() => {
                            props.navigation.push("CashScreen", { total: total});
                        }}>
                        <View  >
                            <Text style={styles.textButton}>CASH</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.textButtonPaymentContainer}>
                    <TouchableOpacity
                        activeOpacity={0.4} 
                        onPress={() => {
                            props.navigation.push("CardScreen", { total: total});
                        }}>
                        <View  >
                            <Text style={styles.textButton}>CARD</Text>
                        </View>
                    </TouchableOpacity>
                </View>            
            </View>

            <View style={styles.bottomButtons}>
                <View style={styles.textButtonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.4} 
                        onPress={() => {
                            props.navigation.goBack();
                        }}>
                        <View  >
                            <Text style={styles.textButton}>BACK</Text>
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
    text: {
        fontSize: 25,
        marginHorizontal: 10
    },
    bottomButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: '13%',
    },
    paymentButtons: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxHeight: '20%',
    },
    textButtonContainer: {
        minWidth: '23%',
        marginHorizontal: 10
    },
    textButtonPaymentContainer: {
        minWidth: '60%',
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

export default PaymentScreen