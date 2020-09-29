import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableOpacity } from 'react-native';

import * as ProductService from '../services/ProductService'

const StartScreen = props => {
    
    const [listProducts, addListProducts] = useState([]);
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {
        ProductService.GetAll().then(products => {
            addListProducts(products)
            setDisabledButton(false)
            console.log('done')
            console.log(products)
        })
        .catch(e => console.error(e))
    },[])


    return (
        // <View style={styles.background}>
            <View style={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/logo2.png')}
                    />
                </View>
                    <TouchableOpacity activeOpacity={0.4} disabled={disabledButton} onPress={() => {
                            props.navigation.push('ProductScreen', {products: listProducts});
                        }}>
                        <Text style={styles.textButton}>START</Text>
                    </TouchableOpacity>
            </View>
        // </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    },
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 150
    },
    // button: {
    //     width: '70%',
    //     borderWidth: 4,
    //     borderRadius: 6,
    //     borderColor: "#002c4f"
    // },
    image: {
        width: '100%',
        height: '65%'
    },
    imageContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '80%'
    },
    textButtonContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: '60%',
        // maxHeight: 40,
        // borderWidth: 1,
        // borderRadius: 6,
        // borderColor: "#002c4f",
        // backgroundColor: "#002c4f",
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
});

export default StartScreen