import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const RejectedComponent = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your payment failed.</Text>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/error.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 130,
        width: '100%',
        minWidth: '50%',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        maxHeight: '40%'
    },
    text: {
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: 'center'
    }
});

export default RejectedComponent