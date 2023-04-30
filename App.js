import Start from './components/Start';
import Communicate from './components/Communicate';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const Stack = createNativeStackNavigator();
export default function App() {
    //Configuration for firebase
    const firebaseConfig = {
        apiKey: 'AIzaSyDkzZ0jiT22eGhsH0FEQNJz_NeTy2FG2KI',
        authDomain: 'leatherpants-70af6.firebaseapp.com',
        projectId: 'leatherpants-70af6',
        storageBucket: 'leatherpants-70af6.appspot.com',
        messagingSenderId: '366494628983',
        appId: '1:366494628983:web:b065d2cebd8b5e35775a72',
        measurementId: 'G-VBHXH5HMNW'
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Start'>
                <Stack.Screen name='Start' component={Start} />
                <Stack.Screen name='Communicate'>
                    {props => <Communicate db={db} {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}