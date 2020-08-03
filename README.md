
# react-native-adaptive-image

## Getting started

`$ npm install react-native-adaptive-image --save`

### Mostly automatic installation

`$ react-native link react-native-adaptive-image`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-adaptive-image` and add `RNAdaptiveImage.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAdaptiveImage.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNAdaptiveImagePackage;` to the imports at the top of the file
  - Add `new RNAdaptiveImagePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-adaptive-image'
  	project(':react-native-adaptive-image').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-adaptive-image/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-adaptive-image')
  	```


## Usage
```javascript
import RNAdaptiveImage from 'react-native-adaptive-image';

// TODO: What to do with the module?
RNAdaptiveImage;
```
  