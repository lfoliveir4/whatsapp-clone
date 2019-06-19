import React from 'react'
import { createStackNavigator, createAppContainer,  } from 'react-navigation'

import Home from './pages/Home'
import Preload from './pages/Preload'

export default createAppContainer(
    createStackNavigator({
    Preload, 
    Home,
})
)