import { Container, Header, HeaderButton, Banner, Title, Rate, DescriptionFilm, StarsContainer, ContanerInfo, ButtonLink } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Modal } from "react-native";
import { useEffect, useState } from "react";
import { ModalFilm } from "@components/ModalFilm";
import { api, key } from "@services/api";
import theme from "@theme/index";
import Stars from "react-native-stars";
import IMovies from "src/interface/IMovies";
import { NotFoundPage } from "@components/NotFoundPage";

interface RouteInitialReading {
  key: string;
  name: string;
  params: IMovies;
}

export const Details: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteInitialReading>();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [details, setDetails] = useState<IMovies>();

  useEffect(() => {
    async function getDetailsMovies() {
      try {
        const response = await api.get(`/${route.params.id}`, {
          params: {
            api_key: key,
            language: 'pt-BR',
          }
        })
        setDetails(response.data);

      } catch (error) {
        console.log('Error details (Details Page)', error)
        alert('Ops :/ \n\nAlgo inesperado aconteceu. Tente novamente');
      }
    }
    getDetailsMovies();
  }, [])

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={28}
            color={theme.COLORS.WHITE}
          />
        </HeaderButton>
        <HeaderButton>
          <Ionicons
            name="bookmark"
            size={28}
            color={theme.COLORS.WHITE}
          />
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original${details?.backdrop_path}` }}
      />

      <ButtonLink onPress={() => setOpenModal(true)}>
        <Feather name="link" size={24} color={theme.COLORS.WHITE} />
      </ButtonLink>

      <ContanerInfo>
        <Title numberOfLines={1}>{details?.title}</Title>
        <StarsContainer>
          <Stars
            default={details?.vote_average}
            count={10}
            half={true}
            starSize={20}
            fullStar={<Ionicons name="md-star" size={24} color={theme.COLORS.YELLOW} />}
            emptyStar={<Ionicons name="md-star-outline" size={24} color={theme.COLORS.YELLOW} />}
            halfStar={<Ionicons name="md-star-half" size={24} color={theme.COLORS.YELLOW} />}
            desable={true}
          />
          <Rate>{details?.vote_average}/10</Rate>
        </StarsContainer>
      </ContanerInfo>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: '5%' }}>
        <Title>Descrição</Title>
        <DescriptionFilm>{details?.overview}</DescriptionFilm>
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={openModal}>
        {details?.homepage === '' ? (
          <NotFoundPage
            title={details?.title}
            closeModal={() => setOpenModal(false)}
          />
        ) :
          <ModalFilm
            title={details?.title}
            closeModal={() => setOpenModal(false)}
            homepage={details?.homepage!}
          />
        }
      </Modal>
    </Container>
  );
}