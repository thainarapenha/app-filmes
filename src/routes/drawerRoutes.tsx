import { createDrawerNavigator } from "@react-navigation/drawer";
import { Movies } from "@screens/Movies";
import StackRoutes from "./stackRoutes";
import theme from "@theme/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.COLORS.BLACK2,
          marginTop: 20,
        },
        drawerActiveBackgroundColor: theme.COLORS.RED,
        drawerActiveTintColor: theme.COLORS.WHITE,
        drawerInactiveTintColor: theme.COLORS.WHITE,
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'Meus filmes',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'archive' : 'archive-off-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerRoutes;