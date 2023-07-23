import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/home";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />
    </Navigator>
  );
}

export default AppRoutes;