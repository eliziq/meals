import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailText}>{duration} min</Text>
      <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // justifyContent: "space-between",
    padding: 8,
  },
  detailText: {
    fontFamily: "montserrat",
    fontSize: 12,
    marginHorizontal: 4,
  },
});
