import { View, Text, TextInput, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import * as Clipboard from 'expo-clipboard';
import Slider from '@react-native-community/slider';
import CheckBox from 'react-native-check-box';

export default function InputField() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [numberAllowed , setNumberAllowed] = useState(false)
    const [symbolAllowed , setSymbolAllowed] = useState(false)

    const copyToClipboard = () => {
        Clipboard.setStringAsync(password);
        ToastAndroid.show('Item Copied',ToastAndroid.BOTTOM)
    };

    const generatePassword = () => {
        let pass = ''
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str += '123456789'
        if(symbolAllowed) str += '@#$%^&*!()'

        for (let i = 0; i < length; i++) {
            let num = Math.floor(Math.random() * str.length+1)
            pass += str.charAt(num);
        }

        setPassword(pass)
    }


    return (
        <View style={{
              padding:20,
              borderRadius: 12,
              margin: 12,
              // Shadow for iOS
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              // Shadow for Android
              elevation: 5,
        }}>
            <TextInput
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 12,
                    borderWidth: 2,
                    margin: 12,
                }}
                placeholder='Password'
                value={password}
                onChangeText={(value) => setPassword(value)}
            ></TextInput>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}>
                <TouchableOpacity
                    onPress={copyToClipboard}
                    style={{
                        alignItems: 'center',
                        borderRadius: 10,
                        backgroundColor: 'blue',
                        width: 'auto',
                        borderWidth: 2,
                        paddingHorizontal: 15,
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: 20,
                    }}>Copy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={generatePassword}
                    style={{
                        alignItems: 'center',
                        width: "auto",
                        borderRadius: 10,
                        backgroundColor: 'blue',
                        borderWidth: 2,
                        paddingHorizontal: 15,
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: 20,
                    }}>Generate Password</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 10
            }}>
                <Slider
                    style={{
                        width: 200,
                        height: 40,
                    }}
                    value={length}
                    minimumValue={6}
                    maximumValue={20}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(value) => setLength(value)}
                    step={1}>
                </Slider>
                <Text style={{
                    fontSize: 20,
                    marginTop: 5,
                    color: '#fff'
                }}>{length} </Text>
            </View>
            <View>
                <CheckBox
                    style={{
                        padding: 10,
                        marginLeft:'35%'
                    }}
                    rightText={"Number"}
                    rightTextStyle={{
                        color:'#fff'
                    }}
                    isChecked={numberAllowed}
                    onClick={() => {
                        setNumberAllowed(!numberAllowed)
                    }}
                    
                />
                <CheckBox
                    style={{
                        padding: 10,
                        marginLeft:'35%',
                        color:'#fff'
                    }}
                    rightText={"Symbols"}
                    rightTextStyle={{
                        color:'#fff'
                    }}
                    isChecked={symbolAllowed}
                    onClick={() => {
                        setSymbolAllowed(!symbolAllowed)
                    }}
                    
                />
            </View>
        </View>
    )
}


