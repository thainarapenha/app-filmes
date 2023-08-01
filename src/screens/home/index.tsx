import { useContext } from "react";
import { Container, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, ScrollContainer } from "./styles";
import { Header } from "@components/Header";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { SliderItem } from "@components/SliderItem";
import { MoviesContext } from "@contexts/Movies";
import theme from "@theme/index";

export const Home = () => {
  const { nowMovies, popularMovies, topMovies, bannerMovies } = useContext(MoviesContext);
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
        <BannerButton activeOpacity={0.9} onPress={() => { }}>
          <Banner
            resizeMethod="resize"
            source={{ uri: `https://image.tmdb.org/t/p/original${bannerMovies}`}}
          />
          {/* <Banner
            resizeMethod="resize"
            source={{ uri: 'https://image.tmdb.org/t/p/w500/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg'}}
          /> */}
        </BannerButton>

        <FlatList
          data={nowMovies.slice(0, 5)}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: 16 }}
        />

        <Title>Mais votados</Title>
        <FlatList
          data={topMovies.slice(0, 10)}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: 16 }}
        />

        <Title>Populares</Title>
        <FlatList
          data={popularMovies}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <SliderItem image={item.poster_path} title={item.title} vote={item.vote_average} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: 16 }}
        />
      </ScrollContainer>
    </Container>
  );
}