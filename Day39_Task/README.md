# React Native - Platform-Specific Code

Today’s learning focused on handling **platform-specific logic, components, and styles** in React Native.

## 1. Platform API

React Native provides the `Platform` module to identify the operating system at runtime.

```js
import { Platform, Text } from "react-native";

<Text>
  {Platform.OS === "android" ? "Running on Android" : "Running on iOS"}
</Text>
```

### Key Methods

* **Platform.OS** → Returns `"android"` or `"ios"`.
* **Platform.select()** → Returns a value based on the platform.

```js
const buttonColor = Platform.select({
  ios: "blue",
  android: "green",
});
```

---

## 2. Platform-Specific Components

React Native automatically loads files based on the platform extension.

Example folder structure:

```
components/
├── Header.android.js
├── Header.ios.js
└── Header.js
```

When importing `Header`, the appropriate file (`.android.js` or `.ios.js`) is used automatically depending on the device.

---

## 3. Platform-Specific Styles

Different styles can be applied dynamically using conditional logic inside `StyleSheet.create()`.

```js
const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === "android" ? "green" : "blue",
  },
});
```

---

## 4. Platform Differences to Remember

| Platform    | Unique Features / Modules                                |
| ----------- | -------------------------------------------------------- |
| **Android** | Material Design UI, `BackHandler`, `ToastAndroid`        |
| **iOS**     | Cupertino UI, `ActionSheetIOS`, special gesture behavior |
