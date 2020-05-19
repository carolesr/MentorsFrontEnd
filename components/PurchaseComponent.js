import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const PurchaseComponent = props => {

    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>                
                <View style={styles.imageContainer}>
                    <Image
                    style={styles.image}
                    source={props.product.image}
                    />
                </View>
                <View>
                    <Text style={styles.textContainer}>{props.quantity}x</Text>
                </View>
            </View>
            <View style={styles.priceContainer}>
                <View>
                    <Text style={styles.textContainer}>{props.product.price}</Text>
                </View>

                <View style={styles.textButtonContainer}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {
                        props.removeProduct( {product: props.product, quantity: props.quantity} )
                    }}>
                        <View  >
                            <Text style={styles.textButton}>--</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        width: '100%',
        minWidth: '50%',
        marginBottom: 10,
    },
    productContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    priceContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '70%'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '100%'
    },
    textContainer: {
        marginHorizontal: 8,
        fontSize: 18
    },
    button: {
        borderWidth: 3,
        borderRadius: 6,
        borderColor: "#002c4f"
    },
    textButtonContainer: {
        minWidth: '12%'
    },
    textButton: {
        color: 'white',
        backgroundColor: "#002c4f",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#002c4f",
        minHeight: '35%',
        textAlign: 'center',
        textAlignVertical: 'center'
        
    }
});

export default PurchaseComponent;
