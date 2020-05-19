import React from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableOpacity } from 'react-native';

const StartScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}
                />
            </View>
                <TouchableOpacity activeOpacity={0.4} onPress={() => {
                        props.navigation.push('ProductScreen');
                    }}>
                    <Text style={styles.textButton}>START</Text>
                </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 150,
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
        height: 130,
    },
    imageContainer: {
        width: '100%'
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