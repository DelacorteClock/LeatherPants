# LeatherPants
## About
LeatherPants is a simple app with a purpose of allowing people to talk about contemporary clothing and design. It is designed to be minimal and easy to use.
## How To Start
Download programming of the main branch at: &#171;github.com/DelacorteClock/LeatherPants/archive/refs/heads/main.zip&#187;

Extract the contents of the zip into a folder.

Run &#171;nvm install 16.19.0&#187; and &#171;nvm use 16.19.0&#187;

Instal expo-cli globally to enable running of expo: &#171;npm instal -g expo-cli&#187;

Open a mobile phone with Google Play and instal expo at &#171;play.google.com/store/apps/details?id=host.exp.exponent&#187;

Make an expo account at &#171;expo.dev/signup&#187;

Run &#171;expo login&#187; in the terminal and respond to instructions to login to the expo account.

Also login to the expo account by entering the newly added expo app on your phone.

Start the app by typing &#171;expo start&#187; in the terminal.

Scan the QR code generated with the mobile phone containing expo or enter expo and click the button which says &#171;LeatherPants on {YOUR COMPUTER NAME}&#187;. The app should then open.

## OPTIONAL : How To Customise With Your Own Firebase/Firestore

If you do not want to receive/send messages through the default LeatherPants Firebase/Firestore and would prefer to use your own you can create a new project at &#171;firebase.google.com&#187;. Use the configuration info to replace the one currently contained in App.js at lines 16-24. Create a firestore database for messages and go to rules and change &#171;allow read, write: if false&#187; to &#171;allow read, write: if true&#187;; the messages collection will be created automatically by LeatherPants whenever you send the first message. Then create authentication in the project and select 'Anonymous' for temporary instant accounts. Finish by adding storage to the project (for images) and change &#171;allow read, write: if false&#187; to &#171;allow read, write: if true&#187;.

## How To Use
To start conversing you must type a display name in the start screen. You can then choose a colour theme if you desire to do so. Here is the start screen before and after user choices got inputted:

![Before](https://user-images.githubusercontent.com/123141973/235028353-c85887e5-2358-4c56-b043-d39405f8cae4.png) ![After](https://user-images.githubusercontent.com/123141973/235028563-67ad6c83-5191-4a43-8bc8-c83af7f3b013.png)

After you click 'GO' you will go to the page where you can communicate.
You can type and send a message in the white box at the bottom like this...

![Typing](https://github.com/DelacorteClock/LeatherPants/assets/123141973/062d89ae-5df0-4ef4-8337-4500fcdcbcb8) ![SentTyped](https://github.com/DelacorteClock/LeatherPants/assets/123141973/22cea309-edc2-4351-87cd-57aca69f8e1a)

Click the option button (circle on the left side of the typing box) to send an image or your location. You will get a menu like this.

![LittleMenu](https://github.com/DelacorteClock/LeatherPants/assets/123141973/c61d89f5-ff41-4c56-a3a1-01842879d068)

This is what the library selection screen looks like if you choose 'Select Library Picture'.

![LibrarySelection](https://github.com/DelacorteClock/LeatherPants/assets/123141973/ff4f72da-674b-4b9c-97a4-73d2c5f588ba)

This is what a sent picture looks like. You can click it to view it in a larger version.

![SentPicture](https://github.com/DelacorteClock/LeatherPants/assets/123141973/3ac15a60-7293-46b4-86c8-d84f6698bae3)

This is what it looks like if you send your location by clicking 'Send Location'.

![SentLocation](https://github.com/DelacorteClock/LeatherPants/assets/123141973/0ce74c52-52c9-42de-91f7-d6596c79e45a)

## Technology Credits
I used React Native and Expo for the creation of this app. Firebase and Firestore were used for saving information about messages and their contents. The Android Emulater system was used for testing.

