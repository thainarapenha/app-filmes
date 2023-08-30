import { Container, Header, HeaderButton } from "./styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import theme from "@theme/index";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import IMovies from "src/interface/IMovies";

interface RouteInitialReading {
  key: string;
  name: string;
  params: IMovies
}

export const Details: React.FC = () => {
  const { params: { id, title, overview, poster_path, backdrop_path, vote_average } } = useRoute<RouteInitialReading>();

  return (
    <Container>
      <Text style={{ color: 'white' }}>{title}</Text>

      <Header>
        <HeaderButton>
          <Feather
            name="arrow-left"
            size={28}
            color={theme.COLORS.WHITE}
          />
        </HeaderButton>
        <HeaderButton>
          <Ionicons
            name="bookmark"
            size={28}
            color={theme.COLORS.WHITE}
          />
        </HeaderButton>
      </Header>

    </Container>
  );
}