import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalComponent = props => {

    const [total, setTotal] = useState(0)
    useEffect(() => {
        sumTotal()
    })
    
    const sumTotal = () => {
        var total = 0
        for(var i = 0; i < props.products.length; i++) {
            let price = parseFloat((props.products[i].product.price).replace('R$', ''))
            let quantity = props.products[i].quantity
            total += price * quantity
        }
        setTotal(total)
    }
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Total = R${total.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 10,
        width: '100%',
        minWidth: '100%',
        borderTopWidth: 1,
        borderColor: 'black'
    },
    text: {
        fontSize: 30,
        marginHorizontal: 10
    }
});

export default TotalComponent