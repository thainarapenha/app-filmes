import { Ionicons } from '@expo/vector-icons';
import { Container, BannerItem, Title, RateContainer, Rate } from "./styles";
import theme from '@theme/index';

type TSelectItem = {
  image: string,
  title: string,
  vote: string,
}

export const SliderItem: React.FC<TSelectItem> = ({ image, title, vote }) => {
  return (
    <Container activeOpacity={0.7}>
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
        <Rate>{vote}</Rate>
      </RateContainer>
    </Container>
  );
}