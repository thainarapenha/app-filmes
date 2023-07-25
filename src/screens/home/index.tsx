import { Header } from "@components/Header";
import { Container, SearchContainer, Input, SearchButton, Title, Banner, BannerButton, SliderMovie } from "./styles";
import { Feather } from "@expo/vector-icons";
import theme from "@theme/index";
import { ScrollView } from "react-native";
import { SliderItem } from "@components/SliderItem";

export const Home = () => {
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
            source={{ uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80' }}
          />
        </BannerButton>

        <SliderMovie
          data={[1, 2, 3, 4, 5]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Populares</Title>
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
        />
      </ScrollView>
    </Container>
  );
}