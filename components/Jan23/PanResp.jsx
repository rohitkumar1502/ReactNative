import { View, Text, Animated, PanResponder } from 'react-native'
import React from 'react'

const PanResp = () => {
    const postion = new Animated.ValueXY({x:0,y:0})

    const pan = PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:(e,c) =>{
            console.log(e,c);
        }
    })
    Animated.timing(postion,{
        toValue:{
            
        }
    })
  return (

    <View>
      
    </View>
  )
}

export default PanResp