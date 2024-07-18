import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { Profile } from '../Screens/Profile';
import { EditProfile } from '../Screens/EditProfile';
// import { SignUp } from '../Screens/SignUp';
import { Intro, IntroScreen } from '../Screens/Intro';


const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        
            <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
            {/* <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
        
        
    )
}