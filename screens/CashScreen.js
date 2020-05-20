import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CashScreen = props => {
    
    const total = props.navigation.getParam('total');

    return (
        <View style={styles.screen}>
            <View style={styles.priceContainer}>                
                <Text style={styles.text}>Your total is</Text>
                <Text style={styles.textPrice}>R${total.toFixed(2)}</Text>
            </View>
            <Text style={styles.text}>Put your cash in the box and take change if needed</Text>
            <Text style={styles.text}>Thank you!</Text>

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