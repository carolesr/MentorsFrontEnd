import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import ProductComponent from '../components/ProductComponent'
import { listProducts } from '../fake_data/products'


const ProductScreen = props => {

    const [list, addList] = useState([]);
    const [quantity, addQuantity] = useState(0);
    const [title, setTitle] = useState('CART');
    const [disabledButton, setDisabledButton] = useState(true);

    const addProduct = id => {
        if(list.length) {
            if (list.filter(x => x.product.id == id).length) { //se já tem um item desse produto na lista, aumenta a quantidade
                list.find(x => x.product.id == id).quantity += 1
                addList([...list])
            } else {
                addList(current => [...current, { product: listProducts[id-1], quantity: 1 } ])
            }
        } else {
            addList(current => [...current, { product: listProducts[id-1], quantity: 1 } ])
        }
        
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
                    id={itemData.item.id}
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
                    keyExtractor={(item, index) => item.id} 
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