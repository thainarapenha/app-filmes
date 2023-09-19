import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";
import { Details } from "@screens/Details";
import { Search } from "@screens/Search";
import theme from "@theme/index";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Sua busca",
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;