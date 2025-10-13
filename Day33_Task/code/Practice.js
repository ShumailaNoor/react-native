// //--------------Practice 1---------------
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello React Native</Text>
//       <Button title="Click me" onPress={() => alert('Hello!')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   text: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#333',
//   },
// });


// //--------------Practice 2---------------
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.redBox}>
//         <Text style={styles.boxText}>Red Box</Text>
//       </View>

//       <View style={styles.greenBox}>
//         <Text style={styles.boxText}>Green Box</Text>
//       </View>

//       <View style={styles.blueBox}>
//         <Text style={styles.boxText}>Blue Box</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   redBox: {
//     width: 150,
//     height: 100,
//     backgroundColor: '#f44336',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     borderRadius: 10,
//   },
//   greenBox: {
//     width: 150,
//     height: 100,
//     backgroundColor: '#4caf50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     borderRadius: 10,
//   },
//   blueBox: {
//     width: 150,
//     height: 100,
//     backgroundColor: '#2196f3',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     borderRadius: 10,
//   },
//   boxText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// //--------------Practice 3---------------
// import React from 'react';
// import { View, Text, Button, StyleSheet, Alert } from 'react-native';

// export default function App() {
//   const showSimpleAlert = () => {
//     alert('Button pressed!');
//   };

//   const showCustomAlert = () => {
//     Alert.alert(
//       'Custom Alert Title',
//       'This is a custom alert message',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { text: 'OK', onPress: () => console.log('OK Pressed') }
//       ]
//     );
//   };

//   const showSuccessMessage = () => {
//     Alert.alert('Success!', 'Your action was completed successfully!');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Button Actions Demo</Text>

//       <View style={styles.buttonContainer}>
//         <Button 
//           title="Press me" 
//           onPress={showSimpleAlert}
//           color="#2196f3"
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button 
//           title="Show Custom Alert" 
//           onPress={showCustomAlert}
//           color="#4caf50"
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button 
//           title="Success Message" 
//           onPress={showSuccessMessage}
//           color="#ff9800"
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button 
//           title="Disabled Button" 
//           onPress={() => {}}
//           disabled={true}
//           color="#9e9e9e"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#333',
//   },
//   buttonContainer: {
//     width: '60%',
//     marginBottom: 25,
//   },
// });