import IMovies from "src/interface/IMovies";
import { Container } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { api, key } from "@services/api";
import { FlatList } from "react-native";
import { SearchItem } from "@components/SearchItem";

interface RouteInitialReading {
  key: string;
  name: string;
  params: IMovies;
}

export const Search = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteInitialReading>();
  const [searchMovie, setSearchMovie] = useState<IMovies[]>();

  const navigateDetailsPage = (item: IMovies) => {
    navigation.navigate('Details', item);
  }

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
        setSearchMovie(response.data.results);

      } catch (error) {
        console.log('Error Search (Search Page)', error)
        alert('Ops :/ \n\nAlgo inesperado aconteceu. Tente novamente');
      }
    }
    getSearchMovies();
  }, [])

  return (
    <Container>
      <FlatList
        data={searchMovie}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <SearchItem image={item.backdrop_path} title={item.title} vote={item.vote_average} navigatePages={() => navigateDetailsPage(item)} data={item} />}
        showsHorizontalScrollIndicator={false}
        style={{ marginRight: 16 }}
      />
    </Container>
  );
}