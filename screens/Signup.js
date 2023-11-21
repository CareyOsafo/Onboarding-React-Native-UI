import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Signup = ({ navigation }) => {

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
                        To get started let's
                    </Text>

                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.black }}>
                        get to know you
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                        marginVertical: 12
                    }}>Type in your email and tap the next button</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                   

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                

                

                <Button 
                onPress={() => navigation.navigate("Signup1")}
                    title="Next"
                    color="grey"
                    style={{
                        marginTop: 25,
                        marginBottom: 30,
                    
                    }}>
                        
                    </Button>

                    
                

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.black,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.black,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 0,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10,
                            marginTop: 25,
                            marginBottom: 30,
                            backgroundColor: COLORS.black
                        }}
                    >
                        <Image
                            source={require("../assets/apple.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}
                        >Apple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 0,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10,
                            marginTop: 25,
                            marginBottom: 30,
                            backgroundColor: COLORS.white
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Pressable
                        onPress={() => navigation.navigate("Welcome")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            fontWeight: "bold",
                            marginLeft: 6,
                            marginVertical: 230
                        }}>Go Back</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup