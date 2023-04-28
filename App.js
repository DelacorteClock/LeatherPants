import Start from './components/Start';
import Communicate from './components/Communicate';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Start'>
                <Stack.Screen name='Start' component={Start} options={{...TransitionPresets.RevealFromBottomAndroid}} />
                <Stack.Screen name='Communicate' component={Communicate} options={{...TransitionPresets.RevealFromBottomAndroid}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}