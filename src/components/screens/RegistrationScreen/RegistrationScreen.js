import { useState } from "react";
import SvgImage from "../../../../assets/add.png";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
// import { KeyboardAvoidingView } from "react-native";

export default function RegistrationScreen({ setHaveAccount }) {
  const [isOn, setIsOn] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const handleRegister = () => {};
  const handleSwitchToggle = () => {
    setIsOn(!isOn);
  };
  const handleSingIn = () => {
    setHaveAccount(true);
  };
  const handleFocus = (e) => {
    setIsInputActive(!isInputActive);
  };
  const handleBlur = () => {
    setIsInputActive(!isInputActive);
  };
  return (
    // <KeyboardAvoidingView
    // behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <View style={styles.background}>
      <Text style={styles.text}>Registration</Text>
      <TouchableOpacity style={styles.profilePhoto}>
        <Image style={styles.plus} source={SvgImage} />
      </TouchableOpacity>
      <View style={styles.flex}>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[
            styles.input,
            isInputActive && styles.inputFocused, // Применение стиля при фокусе
          ]}
          placeholder="Name"
          placeholderTextColor="#BDBDBD"
        />

        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[
            styles.input,
            isInputActive && styles.inputFocused, // Применение стиля при фокусе
          ]}
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
        />

        <View style={styles.switchContainer}>
          <TextInput
            secureTextEntry={!isOn}
            // secureTextEntry="true"
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#BDBDBD"
          />
          <View style={styles.switch}>
            <TouchableOpacity onPress={handleSwitchToggle}>
              {/* <View style={styles.button} /> */}
              <Text style={styles.paswordText}>
                {!isOn ? "Show password" : "Hide Password"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register now</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.paswordText}>Have account?</Text>
          <TouchableOpacity onPress={handleSingIn}>
            <Text style={styles.signIn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    //  </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  inputFocused: {
    borderWidth: 1,
    borderColor: "blue", // Цвет рамки при фокусе
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "65%",
    left: 0,
    top: "35%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    marginTop: 92,
    marginBottom: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  profilePhoto: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    height: 50,
    paddingLeft: 16,
    marginTop: 16,
    width: "90%",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
  },

  button: {
    marginTop: 43,
    padding: 10,
    width: "70%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    height: 51,
    alignSelf: "center",
    justifyContent: "center",
  },
  plus: {
    position: "absolute",
    bottom: 14,
    left: 107,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  switchContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 10,
  },

  switch: {
    position: "absolute",
    bottom: 10,
    right: 30,
  },
  paswordText: {
    padding: 5,
    color: "#1B4371",
  },
  footer: {
    padding: 11,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  signIn: {
    padding: 5,
    color: "#1B4371",
    textDecorationLine: "underline",
    paddingLeft: 2,
  },
});
