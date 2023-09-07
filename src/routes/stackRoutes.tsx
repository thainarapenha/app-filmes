import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";
import { Details } from "@screens/Details";

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
    </Stack.Navigator>
  );
}

export default StackRoutes;