import { ThemeProvider } from 'styled-components';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import Routes from '@routes/index';
import theme from '@theme/index';
import { ActivityIndicator, StatusBar } from "react-native";
import { MoviesProvider } from '@contexts/MoviesContext';
// import { DetailsProvider } from '@contexts/DetailsContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <MoviesProvider>
      {/* <DetailsProvider> */}
        <ThemeProvider theme={theme} >
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.COLORS.BLACK2}
          />
          {fontsLoaded ? <Routes /> : <ActivityIndicator />}
        </ThemeProvider>
      {/* </DetailsProvider> */}
    </MoviesProvider>
  );
}
