import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const ProductComponent = props => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={props.image}
                    // source={{uri: props.image}}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.textContainer}>
                    <Text>{props.price}</Text>
                </View> 
                <View style={styles.textButtonContainer}>                 
                <TouchableOpacity activeOpacity={0.4} onPress={() => {
                    props.addProduct(props.id)
                    }}>
                    <View  >
                        <Text style={styles.textButton}>ADD</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 130,
        width: '100%',
        minWidth: '50%',
        marginBottom: 70
    },
    image: {
        width: '100%',
        height: '70%'
    },
    imageContainer: {
        justifyContent: 'center',
        width: '80%',
        height: '100%'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    textButtonContainer: {
        minWidth: '30%'
    },
    textButton: {
        color: 'white',
        minHeight: '30%',
        backgroundColor: "#002c4f",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#002c4f",
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80%'
    }
});

export default ProductComponent;