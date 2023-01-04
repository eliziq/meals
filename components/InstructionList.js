import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const InstructionList = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{title}</Text>
      {data.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default InstructionList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "montserrat-bold",
    marginVertical: 4,
    marginHorizontal: 36,
    padding: 6,
    textAlign: "center",
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
  },
  listItem: {
    borderRadius: 6,
    backgroundColor: Colors.primary500,
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 36,
  },
  itemText: {
    fontFamily: "montserrat",
    color: Colors.accent500,
    textAlign: "center",
  },
});
