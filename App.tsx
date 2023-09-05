import { ThemeProvider } from 'styled-components';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ActivityIndicator, StatusBar } from "react-native";
import { MoviesProvider } from '@contexts/MoviesContext';
import Routes from '@routes/index';
import theme from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <MoviesProvider>
      <ThemeProvider theme={theme} >
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.COLORS.BLACK2}
        />
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </ThemeProvider>
    </MoviesProvider>
  );
}
