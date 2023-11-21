import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white
           }}>
        
            <View style={{ flex: 1 }}>
               

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.black
                    }}>Need a Hand?</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.black
                    }}>Find a Pro Today</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            marginVertical: 4
                        }}>Connecting Everyday people to professionals</Text>
                    </View>



                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%",
                        }}
                    />


                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome