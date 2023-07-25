import { Header } from "@components/Header";
import { Container, SearchContainer, Input, SearchButton } from "./styles";
import { Feather } from "@expo/vector-icons";
import theme from "@theme/index";

export const Home = () => {
  return (
    <Container>
      <Header title={"React Prime"} />

      <SearchContainer>
        <Input
          placeholder="Digite um filme"
          placeholderTextColor={theme.COLORS.WHITE}
        />

        <SearchButton>
          <Feather name="search" size={30} color={theme.COLORS.WHITE}/>
        </SearchButton>

      </SearchContainer>
    </Container>
  );
}