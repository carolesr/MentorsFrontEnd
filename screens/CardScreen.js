import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AppRegistry } from 'react-native';

import WaitingCardComponent from '../components/WaitingCardComponent';
import ApprovedComponent from '../components/ApprovedComponent';
import RejectedComponent from '../components/RejectedComponent';

const CardScreen = props => {
    
    const total = props.navigation.getParam('total');
    const [component, setComponent] = useState(<WaitingCardComponent/>)
    const [button, setButton] = useState('BACK')

    useEffect(() => {
        if (total > 0 && total < 3) {
            setComponent(<WaitingCardComponent/>)
            setButton('BACK')
        } 
        else if (total >= 3 && total < 5) {
            setComponent(<ApprovedComponent/>)
            setButton('FINISH')
        }
        else {
            setComponent(<RejectedComponent/>)
            setButton('SIGN UP')
        }
    }, [])

    return (
        <View style={styles.screen}>

            {component}
            
            <View style={styles.bottomButtons}>
                <View style={styles.textButtonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.4} 
                        onPress={() => {
                            if (button == 'BACK')
                                props.navigation.goBack();
                            else if (button == 'FINISH')
                                props.navigation.popToTop();
                            else
                                console.log('sign up')
                        }}>
                        <View>
                            <Text style={styles.textButton}>{button}</Text>
                        </View>
                    </TouchableOpacity>
                </View>      
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 70
    },
    bottomButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: '13%'
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
    }
});

export default CardScreen