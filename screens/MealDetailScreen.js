import { Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import InstructionList from "../components/InstructionList";
import Colors from "../constants/colors";
import IconBtn from "../components/IconBtn";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

const MealDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavourite = favouriteMealIds.includes(mealId);

  const changeFavStatusHandler = () => {
    if (mealIsFavourite) {
      dispatch(removeFavourite({ id: mealId }));
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            onPress={changeFavStatusHandler}
            icon={mealIsFavourite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <InstructionList title="Ingredients" data={selectedMeal.ingredients} />
      <InstructionList title="Steps" data={selectedMeal.steps} />
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontFamily: "montserrat-bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: Colors.accent500,
  },
});
