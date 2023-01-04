import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

import Colors from "../constants/colors";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet...</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favouriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "montserrat",
    fontSize: 18,
    textAlign: "center",
    color: Colors.accent500,
  },
});
