import { Container, Header, HeaderButton, Banner, Title, Rate, DescriptionFilm, StarsContainer, ContanerInfo } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import theme from "@theme/index";
import Stars from "react-native-stars";
import IMovies from "src/interface/IMovies";
import { ScrollView } from "react-native-gesture-handler";

interface RouteInitialReading {
  key: string;
  name: string;
  params: IMovies;
}

export const Details: React.FC = () => {
  const navigation = useNavigation();
  const { params: { id, title, overview, poster_path, backdrop_path, vote_average } } = useRoute<RouteInitialReading>();

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
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

      <Banner
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original${backdrop_path}` }}
      />

      <ContanerInfo>
        <Title numberOfLines={1}>{title}</Title>

        <StarsContainer>
          <Stars
            default={vote_average}
            count={10}
            half={true}
            starSize={20}
            fullStar={<Ionicons name="md-star" size={24} color={theme.COLORS.YELLOW} />}
            emptyStar={<Ionicons name="md-star-outline" size={24} color={theme.COLORS.YELLOW} />}
            halfStar={<Ionicons name="md-star-half" size={24} color={theme.COLORS.YELLOW} />}
            desable={true}
          />
          <Rate>{vote_average}/10</Rate>
        </StarsContainer>

      </ContanerInfo>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal: '5%'}}>
          <Title>Descrição</Title>
          <DescriptionFilm>{overview}</DescriptionFilm>
        </ScrollView>
    </Container>
  );
}