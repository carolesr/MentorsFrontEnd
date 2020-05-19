import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import PurchaseComponent from '../components/PurchaseComponent';
import TotalComponent from '../components/TotalComponent';

const PurchaseScreen = props => {

    const [products, updateProducts] = useState( props.navigation.getParam('products') )
    const update = props.navigation.getParam('update')
    
    const [quantity, addQuantity] = useState(0)
    const [disabledButton, setDisabledButton] = useState(true)

    useEffect(() => {
        var q = 0
        for(var i = 0; i < products.length; i++)
            q += products[i].quantity
        addQuantity(q)

        if (quantity > 0) setDisabledButton(false)
        else setDisabledButton(true)
    })

    const removeProduct = item => {
        var index = products.map(x => { return x.product }).indexOf(item.product)        
        if (item.quantity > 1) {
            products[index].quantity -= 1
            updateProducts([...products])
        } else {
            products.splice(index, 1)
            updateProducts([...products])
        }
    }

    const renderGridItem = itemData => {
        return (
            <View>
                <PurchaseComponent 
                product={itemData.item.product}
                quantity={itemData.item.quantity}
                flag={false}
                removeProduct={removeProduct}
                />
            </View>
        )
    }

    return (
        <View style={styles.screen}>

            <View style={styles.flatListContainer}>
                <FlatList
                    keyExtractor={(item, index) => (item.product.id).toString()} 
                    data={products} 
                    renderItem={renderGridItem}
                />
            </View>

            <View style={styles.totalContainer}>
                <TotalComponent products={products}/>
            </View>
            
            <View style={styles.bottomButtons}>
                
                <View style={styles.textButtonContainer}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {
                            update(products)
                            props.navigation.goBack();
                        }}>
                        <View  >
                            <Text style={styles.textButton}>CANCEL</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.textButtonContainer}>
                    <TouchableOpacity 
                    disabled={disabledButton}
                    activeOpacity={0.4} 
                    onPress={() => {
                            update(products)
                            props.navigation.goBack();
                        }}>
                        <View  >
                            <Text style={disabledButton ? styles.disabledTextButton : styles.textButton}>PAY</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 70
    },
    bottomButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginHorizontal: 200,
        // marginVertical: 10
    },    
    // button: {
    //     width: '30%',
    //     borderWidth: 4,
    //     borderRadius: 6,
    //     borderColor: "#002c4f"
    // },
    flatListContainer: {
        maxHeight: '70%',
        maxWidth: '90%'
    },
    totalContainer: {
        maxHeight: '15%',
        maxWidth: '90%',
        marginTop: 20
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
    },
    disabledTextButton: {
        color: 'white',
        backgroundColor: "#002c4f",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#002c4f",
        minHeight: '70%',
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: 0.8
        
    }
});

export default PurchaseScreen