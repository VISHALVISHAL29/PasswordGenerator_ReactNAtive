import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function StoringData() {
  return (
    <View>
     <TouchableOpacity
                    onPress={()=> console.log('Hello')}
                    style={{
                        alignItems: 'center',
                        width: "auto",
                        borderRadius: 10,
                        backgroundColor: 'blue',
                        borderWidth: 2,
                        marginHorizontal:'20%'
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: 20,
                    }}>Store Password</Text>
                </TouchableOpacity>
    </View>
  )
}