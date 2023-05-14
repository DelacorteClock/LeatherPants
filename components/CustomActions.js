import {TouchableOpacity, Text, View, StyleSheet, Alert} from 'react-native';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

const CustomActions = function ({wrapperStyle, iconTextStyle, themeHue, onSend, storage, userId}) {
    const actionSheet = useActionSheet();
    const generateReference = function (uri) {
        const timestamp = (new Date()).getTime();
        //Get image name from uri
        const imageName = uri.split('/')[uri.split('/').length - 1];
        return `${userId}${timestamp}${imageName}`;
    };
    const actionMake = function () {
        const options = ['Select Library Picture', 'Take Picture', 'Send Location', 'Cancel'];
        const cancelButtonIndex = options.length - 1;
        const getLocation = async function () {
            var permission = await Location.requestForegroundPermissionsAsync();
            //Only if allowed
            if (permission?.granted) {
                const location = await Location.getCurrentPositionAsync({});
                if (location) {
                    onSend({
                        location: {
                            longitude: location.coords.longitude,
                            latitude: location.coords.latitude
                        }
                    });
                } else {
                    Alert.alert('The system was unable to process location successfully.');
                }
            } else {
                Alert.alert('You did not allow location tracking.');
            }
        };
        const selectImage = async function () {
            var permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
            //Only if allowed
            if (permission?.granted) {
                var result = await ImagePicker.launchImageLibraryAsync();
                //Do if not cancelled (note: only accepts incorrect spelling of 'cancelled')
                if (!result.canceled) {
                    const imageURI = result.assets[0].uri;
                    const uniqueId = generateReference(imageURI);
                    const response = await fetch(imageURI);
                    const blob = await response.blob();
                    //Give the unique id to the new upload
                    const newUploadRef = ref(storage, uniqueId);
                    uploadBytes(newUploadRef, blob).then(async function (snap) {
                        console.log('File is now uploaded.');
                        const imageURL = await getDownloadURL(snap.ref);
                        onSend({image: imageURL});
                    });
                } else {
                    Alert.alert('You did not allow access to image library.');
                }
            } else {
                Alert.alert('You did not allow access to image library.');
            }
        };
        //Similar process but with cmera launch instead
        const takeImage = async function () {
            var permission = await ImagePicker.requestCameraPermissionsAsync();
            if (permission?.granted) {
                var result = await ImagePicker.launchCameraAsync();
                //Do if not cancelled (note: only accepts incorrect spelling of 'cancelled')
                if (!result.canceled) {
                    const imageURI = result.assets[0].uri;
                    const uniqueId = generateReference(imageURI);
                    const response = await fetch(imageURI);
                    const blob = await response.blob();
                    //Give the unique id to the new upload
                    const newUploadRef = ref(storage, uniqueId);
                    uploadBytes(newUploadRef, blob).then(async function (snap) {
                        console.log('File is now uploaded.');
                        const imageURL = await getDownloadURL(snap.ref);
                        onSend({image: imageURL});
                    });
                } else {
                    Alert.alert('You did not allow access to camera.');
                }
            } else {
                Alert.alert('You did not allow access to camera.');
            }
        };
        actionSheet.showActionSheetWithOptions({options: options, cancelButtonIndex: cancelButtonIndex},
            async function (buttonIndex) {
                switch (buttonIndex) {
                    case 0:
                        console.log('LIBRARY');
                        selectImage();
                        return;
                    case 1:
                        console.log('TAKE PICTURE');
                        takeImage();
                        return;
                    case 2:
                        console.log('LOCATION');
                        getLocation();
                        return;
                    default:
                }
            }
        );
    };
    return (
        <TouchableOpacity style={styles.container} onPress={actionMake} accessible={true} accessibilityLabel='Image Or Map' accessibilityHint='This feature allows you to send an image or your location on a map.'>
            <View style={[styles.wrapper, {borderColor: themeHue}, wrapperStyle]}>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 22,
        height: 22,
        marginLeft: 11,
        marginBottom: 11
    },
    wrapper: {
        borderRadius: 11,
        borderWidth: 3,
        flex: 1
    }
});

export default CustomActions;