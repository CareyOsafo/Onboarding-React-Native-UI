import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Signup2 = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.black,
                        marginTop: 25,
                        
                    }}>
                        What's your phone
                    </Text>

                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.black }}>
                        number?
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                        marginVertical: 12
                    }}>Enter your phone number</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                   

                <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+233'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%"
                            }}
                        />

                        <TextInput
                            placeholder='Phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "80%"
                            }}
                        />
                    </View>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                        marginVertical: 12
                    }}>We will send you a verification code</Text>

                </View>

                

                

                <Button 
                onPress={() => navigation.navigate("OTP")}
                    title="Next"
                    color="grey"
                    style={{
                        marginTop: 370,
                        marginBottom: 30,
                    
                    }}>
                        
                    </Button>

                    
                    <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Pressable
                        onPress={() => navigation.navigate("Verification")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            fontWeight: "bold",
                            marginLeft: 6,
                            marginVertical: 2
                        }}>Go Back</Text>
                    </Pressable>
                </View>
                </View>
            
        </SafeAreaView>
    )
}

export default Signup2