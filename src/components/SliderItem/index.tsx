import { Ionicons } from '@expo/vector-icons';
import { Container, BannerItem, Title, RateContainer, Rate } from "./styles";
import theme from '@theme/index';

export const SliderItem = () => {
  return (
    <Container activeOpacity={0.7}>
      <BannerItem
        source={{ uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80' }}
      />
      <Title numberOfLines={1}>
        Título do filme
      </Title>

      <RateContainer>
        <Ionicons
          name='md-star'
          size={12}
          color={theme.COLORS.YELLOW}
        />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  );
}