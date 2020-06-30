import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import ProductComponent from '../components/ProductComponent'
// import { listProducts } from '../fake_data/products'


const ProductScreen = props => {

    const [list, addList] = useState([]);
    const [quantity, addQuantity] = useState(0);
    const [title, setTitle] = useState('CART');
    const [disabledButton, setDisabledButton] = useState(true);

    const [listProducts, addListProducts] = useState([])

    useEffect(() => {
        console.log('fetch')
        let url = 'https://192.168.0.22:5001/api/Product/GetAll'
        let headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

        fetch(url, {headers: headers})
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson)
            addListProducts(responseJson)
        })
        .catch(e => {
            console.log(e)
        })
    },[])

    useEffect(() => {
        console.log('list update: ')
        console.log(list)
    }, [list])

    const addProduct = id => {
        console.log(listProducts)
        console.log(list)
        console.log(list.length)
        if(list.length) {
            if (list.filter(x => x.product.idProduct == id).length) { //se já tem um item desse produto na lista, aumenta a quantidade
                console.log('if')
                list.find(x => x.product.idProduct == id).quantity += 1
                addList([...list])
            } else {
                console.log('else')
                addList(current => [...current, { product: listProducts.filter(x => x.idProduct == id), quantity: 1 } ])
            }
        } else {
            console.log('else 2')
            let obj = { product: listProducts.filter(x => x.idProduct == id)[0], quantity: 1 }
            let newState = [...list, obj]
            console.log(newState)
            addList(newState)
        }
        
        console.log(quantity)
        addQuantity(quantity + 1)
        setTitle('CART(' + (quantity+1).toString() + ')')
        setDisabledButton(false)
    }

    const updateProducts = lista => {
        addList([...lista])
        let total = 0
        for(var i = 0; i < lista.length; i++) 
            total += lista[i].quantity        
        addQuantity(total)
        if(total > 0) {
            setTitle('CART(' + total.toString() + ')')
            setDisabledButton(false)
        }
        else {
            setTitle('CART')
            setDisabledButton(true)
        }
    }

    const renderGridItem = (itemData) => {
        return(
                <View>
                    <ProductComponent 
                    id={itemData.item.idProduct}
                    title={itemData.item.name}
                    price={itemData.item.price}
                    image={itemData.item.image}
                    addProduct = {addProduct}
                    />
                </View>
            );
        };

    return (
        <View style={styles.screen}>

            <View style={styles.flatListContainer}>
                <FlatList
                    keyExtractor={(item, index) => item.idProduct} 
                    data={listProducts} 
                    renderItem={renderGridItem} 
                    numColumns={2}
                />
            </View>

            <View style={styles.bottomButtons}>

                <View style={styles.textButtonContainer}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {
                            props.navigation.pop();
                        }}>
                        <View  >
                            <Text style={styles.textButton}>CANCEL</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.textButtonContainer}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => {
                            props.navigation.push('CartScreen', {products: list, update: updateProducts});
                            console.log(list)
                        }}>
                        <View  >
                            <Text style={styles.textButton}>{title}</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.textButtonContainer}>
                    <TouchableOpacity 
                    activeOpacity={0.4} 
                    disabled={disabledButton} 
                    onPress={() => {
                            props.navigation.push('PurchaseScreen', {products: list, update: updateProducts});
                        }}>
                        <View  >
                            <Text style={disabledButton ? styles.disabledTextButton : styles.textButton}>FINISH</Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
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
        alignItems: "flex-end",
        width: '80%'
    },
    // button: {
    //     width: '30%',
    //     borderWidth: 1,
    //     borderRadius: 6,
    //     borderColor: "#002c4f"
    // },
    flatListContainer: {
        maxHeight: '85%'
    },
    textButtonContainer: {
        minWidth: '23%'
    },
    textButton: {
        color: 'white',
        backgroundColor: "#002c4f",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#002c4f",
        minHeight: '50%',
        textAlign: 'center',
        textAlignVertical: 'center'        
    },
    disabledTextButton: {
        color: 'white',
        backgroundColor: "#002c4f",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#002c4f",
        minHeight: '50%',
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: 0.8  
    }
});

export default ProductScreen