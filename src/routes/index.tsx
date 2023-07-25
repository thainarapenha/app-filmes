import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./drawerRoutes";
import "react-native-gesture-handler";

function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}

export default Routes;