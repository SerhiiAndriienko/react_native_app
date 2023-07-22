import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
  LogBox,
} from "react-native";
import Footer from "../../Footer/Footer";
import Publication from "../../Publication/Publication";

export default function PostsScreen({}) {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.h1}>Publications</Text>
        <TouchableOpacity style={styles.logOut}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Publication></Publication>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#040E2E",
    position: "relative",
    height: "100%",
  },
  flex: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(4,14,46,0.14)",
  },
  h1: {
    textAlign: "center",
    fontWeight: "700",
    paddingBottom: 11,
  },
  logOut: {
    position: "absolute",
    top: 50,
    right: 10,
  },
  footer: {
    // padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
