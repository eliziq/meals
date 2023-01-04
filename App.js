import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Colors from "./constants/colors";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
// import FavouritesContextProvider from "./store/context/favourites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();

  const Drawer = createDrawerNavigator();
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTitleStyle: { fontFamily: "montserrat-bold", fontSize: 22 },
          sceneContainerStyle: { backgroundColor: Colors.primary600 },
          headerTintColor: Colors.accent500,
          headerTitleAlign: "center",
          drawerActiveBackgroundColor: Colors.primary600,
          drawerActiveTintColor: "white",
          drawerContentStyle: { backgroundColor: Colors.primary500 },
          drawerInactiveTintColor: Colors.accent500,
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size - 5} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size - 5} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="dark" />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTitleStyle: { fontFamily: "montserrat-bold", fontSize: 22 },
              contentStyle: { backgroundColor: Colors.primary600 },
              headerTintColor: Colors.accent500,
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{ title: "Lets cook!" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
