import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import LogoImage from "./x.jpg";
import RegistrationScreen from "./src/components/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/components/screens/LoginScreen/LoginScreen";
import { KeyboardAvoidingView } from "react-native";
import PostsScreen from "./src/components/screens/PostsScreen/PostsScreen";
import { TouchableWithoutFeedback } from "react-native-web";

export default function App() {
  const [haveAccount, setHaveAccount] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {!isLogin && (
        <ImageBackground source={LogoImage} style={styles.image}>
          <Pressable onPress={Keyboard.dismiss} style={""}>
            {haveAccount ? (
              <LoginScreen
                haveAccount={haveAccount}
                setHaveAccount={setHaveAccount}
              ></LoginScreen>
            ) : (
              <RegistrationScreen
                haveAccount={haveAccount}
                setHaveAccount={setHaveAccount}
              ></RegistrationScreen>
            )}
            <StatusBar style="auto" />
          </Pressable>
        </ImageBackground>
      )}
      {/* {!isLogin && <PostsScreen></PostsScreen>} */}
      {/* <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "700",
  },
});
