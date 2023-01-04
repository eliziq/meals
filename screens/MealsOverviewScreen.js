import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

//screen componentr get route and navigation props automaticly
const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
