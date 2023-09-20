import { Ionicons } from '@expo/vector-icons';
import { Container, BannerItem, Title, RateContainer, Rate } from "./styles";
import theme from '@theme/index';
import IMovies from 'src/interface/IMovies';

type TSelectItem = {
  data: IMovies,
  image: string,
  title: string,
  vote: number,
  navigatePages(data: IMovies): void;
}

export const SearchItem: React.FC<TSelectItem> = ({ data, image, title, vote, navigatePages }) => {
  return (
    <Container activeOpacity={0.7} onPress={() => navigatePages(data)}>
      {data.backdrop_path ? (
        <>
          <BannerItem
            source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          />
          <Title numberOfLines={1}>
            {title}
          </Title>

          <RateContainer>
            <Ionicons
              name='md-star'
              size={12}
              color={theme.COLORS.YELLOW}
            />
            <Rate>{vote.toFixed(1)}/10</Rate>
          </RateContainer>
        </>

      ) : (
        null
      )}
    </Container>
  );
}