import { useContext, useEffect } from "react";
import { Container, SearchContainer, Input, SearchButton, Title, Banner, BannerButton, SliderMovie, ScrollContainer } from "./styles";
import { Header } from "@components/Header";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { SliderItem } from "@components/SliderItem";
import { MoviesContext } from "@contexts/Movies";
import theme from "@theme/index";

export const Home = () => {
  const { nowMovies, popularMovies, topMovies } = useContext(MoviesContext);

  useEffect(() => {
  }, [nowMovies])

  return (
    <Container>
      <Header title={"Cine Home"} />

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
        <BannerButton activeOpacity={0.9} onPress={() => {}}>
          <Banner
            resizeMethod="resize"
            source={{ uri: 'https://image.tmdb.org/t/p/w500/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg'}}
          />
        </BannerButton>

        <FlatList 
          data={nowMovies}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Title>Populares</Title>
        <FlatList
          data={popularMovies}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Title>Mais votados</Title>
        <FlatList
          data={topMovies}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollContainer>
    </Container>
  );
}