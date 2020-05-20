import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import PurchaseScreen from '../screens/PurchaseScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Navigator = createStackNavigator({
    StartScreen: { screen: StartScreen, navigationOptions: { header: null} },
    ProductScreen: { screen: ProductScreen, navigationOptions: { header: null} },
    CartScreen: { screen: CartScreen, navigationOptions: { header: null} },
    PurchaseScreen: { screen: PurchaseScreen, navigationOptions: { header: null} },
    PaymentScreen: { screen: PaymentScreen, navigationOptions: { header: null} }
});

export default createAppContainer(Navigator);