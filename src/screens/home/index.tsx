import { useContext } from "react";
import { Container, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, ScrollContainer } from "./styles";
import { Header } from "@components/Header";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { SliderItem } from "@components/SliderItem";
import { MoviesContext } from "@contexts/MoviesContext";
import theme from "@theme/index";
import IMovies from "src/interface/IMovies";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const { nowMovies, popularMovies, topMovies, bannerMovies } = useContext(MoviesContext);

  const navigation = useNavigation();
  const navigateDetailsPage = (item: IMovies) => {
    navigation.navigate('Details', item);
  }

  return (
    <Container>
      <Header title={"BOX FILM"} />

      <SearchContainer>
        <Input
          placeholder="Digite um filme"
          placeholderTextColor={theme.COLORS.WHITE}
        />
        <SearchButton>
          <Feather name="search" size={30} color={theme.COLORS.WHITE} />
        </SearchButton>
      </SearchContainer>

      <ScrollContainer >
        <Title>Em cartaz</Title>
        <BannerButton activeOpacity={0.9}>
          <Banner
            resizeMethod="resize"
            source={{ uri: `https://image.tmdb.org/t/p/original${bannerMovies?.backdrop_path}` }}
          />
        </BannerButton>

        <FlatList
          data={nowMovies.slice(0, 5)}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} navigatePages={() => navigateDetailsPage(item)} data={[]} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: 16 }}
        />

        <Title>Mais votados</Title>
        <FlatList
          data={topMovies.slice(0, 10)}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} navigatePages={() => navigateDetailsPage(item)} data={[]} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: 16 }}
        />

        <Title>Populares</Title>
        <FlatList
          data={popularMovies}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} navigatePages={() => navigateDetailsPage(item)} data={[]} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: 16 }}
        />
      </ScrollContainer>
    </Container>
  );
}