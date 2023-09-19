import IMovies from "src/interface/IMovies";
import { Container, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { api, key } from "@services/api";

interface RouteInitialReading {
  key: string;
  name: string;
  params: IMovies;
}

export const Search = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteInitialReading>();

  const [searchMovie, setSearchMovie] = useState<IMovies>();

  useEffect(() => {
    async function getSearchMovies() {
      try {
        const response = await api.get(`/search/movie`, {
          params: {
            query: route.params,
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        })
        setSearchMovie(response.data);

      } catch (error) {
        console.log('Error Search (Search Page)', error)
        alert('Ops :/ \n\nAlgo inesperado aconteceu. Tente novamente');
      }
    }
    getSearchMovies();
  }, [])
  
  return(
    <Container>
      <Title>Sua busca</Title>
    </Container>
  );
}