import { Header } from "@components/Header";
import { Container, SearchContainer, Input, SearchButton, Title, Banner, BannerButton, SliderMovie } from "./styles";
import { Feather } from "@expo/vector-icons";
import theme from "@theme/index";
import { ScrollView } from "react-native";
import { SliderItem } from "@components/SliderItem";
import { useContext, useEffect } from "react";
import { MoviesContext } from "@contexts/Connection";
import IMovies from "src/interface/IMovies";

export const Home = () => {
  const { nowMovies } = useContext(MoviesContext);

  useEffect(() => {
    console.log('entrou na tela')
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => { }}>
          <Banner
            resizeMethod="resize"
            source={{ uri: '' }}
          />
        </BannerButton>

        <SliderMovie
          data={nowMovies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <SliderItem data={item}/>}
        />

        {/* <Title>Populares</Title>
        <SliderMovie
          data={[1, 2, 3, 4, 5]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          data={[1, 2, 3, 4, 5]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SliderItem />}
        /> */}
      </ScrollView>
    </Container>
  );
}