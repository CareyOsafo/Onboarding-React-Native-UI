import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Signup1 = ({ navigation }) => {

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
                        Would you like to use 
                    </Text>

                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.black }}>
                        this name
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                        marginVertical: 12
                    }}>Type in your first and last name</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                   

                    <View style={{
                        width: "100%",
                        height: 55,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        
                    }}>
                        <TextInput
                            placeholder='First Name'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>

                    <View style={{
                        width: "100%",
                        height: 55,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        marginTop: 30
                    }}>
                        <TextInput
                            placeholder='Last Name'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginVertical: 0 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            
                        }}>Please make sure the name provided appears on your government issued ID</Text>
                    </View>


                

                <Button 
                onPress={() => navigation.navigate("Signup2")}
                    title="Next"
                    color="grey"
                    style={{
                        marginTop: 250,
                        marginBottom: 30,
                    
                    }}>
                        
                    </Button>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
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

export default Signup1