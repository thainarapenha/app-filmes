import { CloseModal, Container, ContainerNotFound, ContainerTitle, ImageNotFound, Title, TitleNotFound } from "./styles";
import { Feather } from "@expo/vector-icons";
import theme from "@theme/index";

type TModalNotFound = {
  title?: string;
  closeModal: () => void;
}

export const NotFoundPage: React.FC<TModalNotFound> = ({ title, closeModal }) => {
  return (
    <Container>
      <ContainerTitle>
        <Title numberOfLines={1}>{title}</Title>
        <CloseModal onPress={() => closeModal()}>
          <Feather name="x" size={24} color={theme.COLORS.WHITE} />
        </CloseModal>
      </ContainerTitle>

      <ContainerNotFound>
        <TitleNotFound>
          Infelizmente não foi disponibilizado link para esse filme :/
        </TitleNotFound>
        <ImageNotFound
          source={require('@assets/img/not-found.png')}
          />
      </ContainerNotFound>
    </Container>
  );
}