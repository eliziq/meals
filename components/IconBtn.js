import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

const IconBtn = ({ icon, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={Colors.accent500} />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
