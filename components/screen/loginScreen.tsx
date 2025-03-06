import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={require("../../assets/image/Background.jpeg")} style={styles.backgroundImage} resizeMode="cover" />

      {/* Islamic Calligraphy */}
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/image/text.jpeg")} style={styles.islamicImage} resizeMode="contain" />
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Enter Your Name</Text>
      <TextInput style={styles.input} placeholder="Name" />

      <Text style={styles.label}>Enter Your Gmail</Text>
      <TextInput style={styles.input} placeholder="@gmail.com" keyboardType="email-address" />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="12345678" secureTextEntry />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput style={styles.input} placeholder="12345678" secureTextEntry />
      </View>
      {/* Get OTP Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    // padding: 25,
    
  },
  inputContainer:{
  width:300,
  alignSelf:"center",
//   marginTop: 90,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "blue",
    marginTop:130,
  },
  islamicImage: {
    width: 250,
    height: 80,
  },
  label: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 1,
  },
  input: {
    
    width: "100%",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: 300,
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#444",
  },
});


// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // Function to send OTP via API
//   const handleGetOTP = async () => {
//     if (!name || !email || !password || !confirmPassword) {
//       Alert.alert("Error", "All fields are required.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch("https://your-api.com/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         Alert.alert("Success", "OTP sent successfully.");
//         navigation.navigate("OTPScreen", { email }); // Navigate to OTP Screen
//       } else {
//         Alert.alert("Error", data.message || "Failed to send OTP.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Background Image */}
//       <Image source={require("../../assets/image/Background.jpeg")} style={styles.backgroundImage} resizeMode="cover" />

//       {/* Islamic Calligraphy */}
//       <View style={styles.imageContainer}>
//         <Image source={require("../../assets/image/text.jpeg")} style={styles.islamicImage} resizeMode="contain" />
//       </View>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Enter Your Name</Text>
//         <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />

//         <Text style={styles.label}>Enter Your Email</Text>
//         <TextInput style={styles.input} placeholder="email@example.com" keyboardType="email-address" value={email} onChangeText={setEmail} />

//         <Text style={styles.label}>Password</Text>
//         <TextInput style={styles.input} placeholder="********" secureTextEntry value={password} onChangeText={setPassword} />

//         <Text style={styles.label}>Confirm Password</Text>
//         <TextInput style={styles.input} placeholder="********" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
//       </View>

//       {/* Get OTP Button */}
//       <TouchableOpacity style={styles.button} onPress={handleGetOTP}>
//         <Text style={styles.buttonText}>Get OTP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#F5F5F5",
//     padding: 20,
//   },
//   inputContainer: {
//     width: 300,
//     alignSelf: "center",
//   },
//   backgroundImage: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   },
//   imageContainer: {
//     width: 300,
//     height: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 20,
//   },
//   islamicImage: {
//     width: 250,
//     height: 80,
//   },
//   label: {
//     color: "#333",
//     fontSize: 16,
//     fontWeight: "bold",
//     alignSelf: "flex-start",
//     marginBottom: 5,
//   },
//   input: {
//     width: "100%",
//     backgroundColor: "#FFF",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   button: {
//     width: 300,
//     backgroundColor: "#1D8348",
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 30,
//     alignItems: "center",
//   },
//   buttonText: {
//     fontWeight: "bold",
//     color: "#FFF",
//     fontSize: 16,
//   },
// });
