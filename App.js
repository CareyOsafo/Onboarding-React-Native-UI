import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, Signup1, Signup2 } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
        name="Signup1"
        component={Signup1}
        options={{
        headerShown: false
        }}
        />

<Stack.Screen
        name="Signup2"
        component={Signup2}
        options={{
        headerShown: false
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}