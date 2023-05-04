# TMDB

This is a repository for TMDB app that show popular, upcoming Movies & TV shows made with React Native, TypeScript, TailWindCSS, The Movie DB API, & React Navigation.

Funcionalities:

- HomePage Carousel Shows Upcoming Movies.
- Swipe Left/Right to View More Movies/Shows.
- Click on Movie / TV card to goto Details Page.
- Navigate back by cliking on Back Button on Header.
- Click on Magnifying 🔍 Icon to Navigate to Search Page.
- Type Movie / TV name to Search & click on Card to goto Details Page.

### Prerequisites

**Node ^= 16**

**Android Studio / XCode (Virtual Device Simulation)**

**VS Code (IDE)**

### Cloning the repository

```shell
git clone https://github.com/nayak-nirmalya/tmdb_app_react_native.git
```

## Running Project

To run your project, connect your physical device via usb and turn on USB Debuggin or start Android Virtual Device, then navigate to the root directory and run one of the following npm commands:

```shell
cd uber-clone
npm run android
npm run ios
npm run start
```

To Build APK File, Run:

```shell
cd android
./gradlew assembleRelease
```

Android Build APK can be found at: `android\app\build\outputs\apk\release\app-release.apk`

Android Build APK for this Project: `build_files\TMDB.apk`

## Screenshots

<div align='center'>

### LogIn Screen

<img src="readme_imgs/login_screen.jpg" width="360">

### Home Screen

<img src="readme_imgs/home_screen.png" width="360">

### No More Profile

<img src="readme_imgs/no_profile.png" width="360">

### User SetUp Modal

<img src="readme_imgs/modal_screen.png" width="360">

### Match Screen

<img src="readme_imgs/match_screen.png" width="360">

### Chat List Screen

<img src="readme_imgs/chat_screen.jpg" width="360">

### Message Screen

<img src="readme_imgs/message_screen.png" width="360">

</div>
