import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ApprovedComponent = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>All done!</Text>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/ok.png')}
                />
            </View>

            <Text style={styles.text}>Thank you! {"\n"} Enjoy your break!</Text>
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
        width: '40%',
        maxHeight: '31%'
    },
    text: {
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: 'center'
    }
});

export default ApprovedComponent