import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
export default function Footer() {
  return (
    <View style={styles.flexBox}>
      <TouchableOpacity style={styles.btn}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Add publication</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Acc info</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "33.3%", // Добавлено для равномерного распределения кнопок по горизонтали
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center", // Добавлено, чтобы содержимое кнопок выровнялось по центру
    // backgroundColor: "lightgray", // Цвет фона кнопок для наглядности
    borderTopWidth: 1,
    borderTopColor: "rgba(4,14,46,0.14)",
  },
});
